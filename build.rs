// WARNING: This build script does "Things that sys crates should NOT do"
// (from https://kornel.ski/rust-sys-crate)
// 
// Namely, if the gmsh library isn't found, it will download a tarball from 
// gmsh.info.bin and try to install it in a suitable location. 
// 
// Rationale: 
//
//   Downloading tarballs is the recommended way to get the Gmsh SDK. 
//
//   Running this crate without Gmsh installed causes a scary linker error. 
//   At this point, users may get discouraged and give up. 
//   
//   gmsh.info is a well-known, university supported site. 
//   
//   No special privileges are required and system libraries will not be overwritten. 
// 
// Discarded options: 
// 
// 1. Bundling the Gmsh source code in this crate. Gmsh is 30MB compressed, 
//    and crates.io has a 10MB limit. 
// 2. Relying on system package managers. Though Gmsh itself is sometimes 
//    available through package managers, the SDK is not. 
// 
// Build process: 
// 
// 1. Check for the environment variable GMSH_LIB_DIR. 
// 2. Look for the Gmsh library in conventional system locations.  
// 3. As a last resort, download the library and extract it to a local folder. 
//    Add this local folder to Cargo's search path. 
// 
// -- script adapted from Kornel Lesiński's libpng build script: 
//    https://github.com/kornelski/rust-libpng-sys/blob/master/build.rs

extern crate pkg_config; 

use std::process::Command;
use std::path::Path;
use std::env; 

fn main() {
    
    // 1. environment variable takes first priority 

    let env_gmsh = "GMSH_LIB_DIR";
    if let Some(lib_dir) = env::var_os(env_gmsh) {

        // rerun if changed 
        println!("cargo:rerun-if-env-changed={}", env_gmsh); 

        let lib_dir = Path::new(&lib_dir); 
        let dylib_name = format!("{}gmsh{}", 
                                 env::consts::DLL_PREFIX, 
                                 env::consts::DLL_SUFFIX); 
        if lib_dir.join(dylib_name).exists() ||
           lib_dir.join("gmsh.lib").exists() { 
                println!("cargo:rustc-link-search={}", lib_dir.display());
                // println!("cargo:rustc-flags=-l gmsh -L {}", lib_dir.display()); 
        } else {
            println!("cargo:warning={} is set to {:?}, but no shared library files were found there", env_gmsh, lib_dir);
        }
    } 
    
    // 2. search the system  
    // try pkg-config on linux     
    
    // check a    

    // always link the gmsh shared library
    println!("cargo:rustc-link-lib=gmsh");
}

fn try_pkgconfig() -> bool { 
    let mut pkg = pkg_config::Config::new(); 
    pkg.atleast_version("4.4"); // same point as our bindings 
    
    unimplemented!(); 
    
    match pkg.probe("gmsh") {
        Ok(gmsh_lib) => {println!("found it"); true}, 
        Err(err) => {println!("didn't find it"); false}, 
    }
}

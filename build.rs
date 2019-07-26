fn main() {
    // Tell cargo to link the gmsh shared library
    println!("cargo:rustc-link-lib=gmsh");
}

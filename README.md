Unofficial bindings to the Gmsh C API (currently v4.4.1).
The bindings are directly generated using `bindgen`.
They're very low-level and you'll likely want them wrapped in a higher-level crate, like [rgmsh](https://crates.io/crates/rgmsh).

You'll need a copy of the Gmsh SDK library (`libgmsh`) to link with.  

If you're getting linker errors when trying to run `cargo test`, try passing 
the Gmsh library location to `LD_LIBRARY_PATH` during the call: 

```shell
LD_LIBRARY_PATH="<libgmsh-path>" cargo test
```

For posterity, the exact `bindgen` call (v0.50.0) was 
```rust
let bindings = bindgen::Builder::default()
                .header("gmsh/api/gmshc.h")
                .generate_comments(true)
                .generate()
                .expect("Unable to generate bindings");

    let out_path = PathBuf::from(env::var("OUT_DIR").unwrap());
    bindings
        .write_to_file(out_path.join("bindings.rs"))
        .expect("Couldn't write bindings!");
``` 

---------------------

Gmsh is copyright (C) 1997-2019 by C. Geuzaine and J.-F. Remacle.

From the [Gmsh website](http://gmsh.info/): 
> Gmsh is a free 3D finite element mesh generator with a built-in CAD engine and post-processor.


Links: 
* [Gmsh documentation](http://gmsh.info/doc/texinfo/gmsh.html)
* [Gmsh API demos](https://gitlab.onelab.info/gmsh/gmsh/blob/master/demos/api/README.txt)
* [Gmsh development website](https://gitlab.onelab.info/gmsh/gmsh)

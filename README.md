Unofficial bindings to the Gmsh C API (currently v4.4.1).
The bindings are directly generated using `bindgen`.
They're very low-level and you'll likely want them wrapped in a higher-level crate, like [rgmsh](https://crates.io/crates/rgmsh).

You'll need a copy of the Gmsh SDK library (`libgmsh`) to link with.  

## Setting up `libgmsh`
This crate uses an environment variable `GMSH_LIB_DIR`. 
Set `GMSH_LIB_DIR` to the location of your Gmsh SDK `/lib` folder. 
You'll also need to adjust your `LD_LIBRARY_PATH` to be able to find the library at runtime. 

### `libgmsh` installation (Linux)

Download the Gmsh SDK (v4.4.1) to the current folder and set your library variables accordingly.
```shell 
$ wget http://gmsh.info/bin/Linux/gmsh-4.4.1-Linux64-sdk.tgz -O /tmp/gmsh-sdk.tar.gz
$ tar -xvf /tmp/gmsh-sdk.tar.gz
$ export GMSH_LIB_DIR=$PWD/gmsh-4.4.1-Linux64-sdk/lib/
$ export LD_LIBRARY_PATH=$GMSH_LIB_DIR:$LD_LIBRARY_PATH
$ cargo test -- --test-threads=1
``` 

Add the variables to your shell configuration file to avoid having to set them each time. 
```shell
# in your .bashrc or similar 
GMSH_LIB_DIR="/path/to/your/gmsh-sdk/lib"
export GMSH_LIB_DIR

LD_LIBRARY_PATH=$GMSH_LIB_DIR:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH
```

---------------------

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

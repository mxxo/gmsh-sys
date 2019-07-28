Unoffical bindings to the Gmsh C API (currently v4.4.1).
The bindings are directly generated using `bindgen`.
They're very low-level and you'll likely want them wrapped in a higher-level crate.

You'll need a copy of the Gmsh SDK library (`libgmsh`) to link with.  

Gmsh is copyright (C) 1997-2019 by C. Geuzaine and J.-F. Remacle.

From the [Gmsh website](http://gmsh.info/): 
> Gmsh is a free 3D finite element mesh generator with a built-in CAD engine and post-processor.


Further reading: 
* [Gmsh documentation](http://gmsh.info/doc/texinfo/gmsh.html)
* [Gmsh API demos](https://gitlab.onelab.info/gmsh/gmsh/blob/master/demos/api/README.txt)
* [Gmsh development website](https://gitlab.onelab.info/gmsh/gmsh)

Unoffical bindings to the Gmsh C API (currently v4.4.1).
The bindings are directly generated using `bindgen`.
They're very low-level and you'll likely want them wrapped in a higher-level crate.

You'll need a copy of the Gmsh SDK library (`libgmsh`) to link with.  

From the [Gmsh website](http://gmsh.info/): 

Gmsh is a free 3D finite element mesh generator with a built-in CAD engine and post-processor.
Gmsh is copyright (C) 1997-2019 by C. Geuzaine and J.-F. Remacle.

[Development website](https://gitlab.onelab.info/gmsh/gmsh)

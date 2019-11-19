var N=null,E="",T="t",U="u",searchIndex={};
var R=["Set a transfinite meshing constraint on the surface `tag`.…","Set a mesh size constraint on the model entities…","Set a transfinite meshing constraint on the curve `tag`,…","Set a recombination meshing constraint on the model entity…","Set a smoothing meshing constraint on the model entity of…","Set a reverse meshing constraint on the model entity of…","Add a straight line segment between the two points with…","Add a Bezier curve with `pointTags` control points. If…","Add a curve loop (a closed wire) formed by the curves…","Add a surface loop (a closed shell) formed by…","Extrude the model entities `dimTags` by translation along…","Extrude the model entities `dimTags` by rotation of…","Translate the model entities `dimTags` along (`dx`, `dy`,…","Rotate the model entities `dimTags` of `angle` radians…","Scale the model entities `dimTag` by factors `a`, `b` and…","Apply a symmetry transformation to the model entities…","Copy the entities `dimTags`; the new entities are returned…","Remove the entities `dimTags`. If `recursive` is true,…","Remove all duplicate entities (different entities at the…","max_align_t"];
searchIndex["gmsh_sys"]={"doc":"Low-level bindings to the Gmsh SDK.","i":[[3,R[19],"gmsh_sys",E,N,N],[12,"__clang_max_align_nonce1",E,E,0,N],[12,"__bindgen_padding_0",E,E,0,N],[12,"__clang_max_align_nonce2",E,E,0,N],[5,"gmshFree",E,E,N,N],[5,"gmshMalloc",E,E,N,N],[5,"gmshInitialize",E,"Initialize Gmsh. This must be called before any call to…",N,N],[5,"gmshFinalize",E,"Finalize Gmsh. This must be called when you are done using…",N,N],[5,"gmshOpen",E,"Open a file. Equivalent to the `File->Open` menu in the…",N,N],[5,"gmshMerge",E,"Merge a file. Equivalent to the `File->Merge` menu in the…",N,N],[5,"gmshWrite",E,"Write a file. The export format is determined by the file…",N,N],[5,"gmshClear",E,"Clear all loaded models and post-processing data, and add…",N,N],[5,"gmshOptionSetNumber",E,"Set a numerical option to `value`. `name` is of the form…",N,N],[5,"gmshOptionGetNumber",E,"Get the `value` of a numerical option. `name` is of the…",N,N],[5,"gmshOptionSetString",E,"Set a string option to `value`. `name` is of the form…",N,N],[5,"gmshOptionGetString",E,"Get the `value` of a string option. `name` is of the form…",N,N],[5,"gmshOptionSetColor",E,"Set a color option to the RGBA value (`r`, `g`, `b`, `a`),…",N,N],[5,"gmshOptionGetColor",E,"Get the `r`, `g`, `b`, `a` value of a color option. `name`…",N,N],[5,"gmshModelAdd",E,"Add a new model, with name `name`, and set it as the…",N,N],[5,"gmshModelRemove",E,"Remove the current model.",N,N],[5,"gmshModelList",E,"List the names of all models.",N,N],[5,"gmshModelSetCurrent",E,"Set the current model to the model with name `name`. If…",N,N],[5,"gmshModelGetEntities",E,"Get all the entities in the current model. If `dim` is >=…",N,N],[5,"gmshModelSetEntityName",E,"Set the name of the entity of dimension `dim` and tag `tag`.",N,N],[5,"gmshModelGetEntityName",E,"Get the name of the entity of dimension `dim` and tag `tag`.",N,N],[5,"gmshModelGetPhysicalGroups",E,"Get all the physical groups in the current model. If `dim`…",N,N],[5,"gmshModelGetEntitiesForPhysicalGroup",E,"Get the tags of the model entities making up the physical…",N,N],[5,"gmshModelGetPhysicalGroupsForEntity",E,"Get the tags of the physical groups (if any) to which the…",N,N],[5,"gmshModelAddPhysicalGroup",E,"Add a physical group of dimension `dim`, grouping the…",N,N],[5,"gmshModelSetPhysicalName",E,"Set the name of the physical group of dimension `dim` and…",N,N],[5,"gmshModelGetPhysicalName",E,"Get the name of the physical group of dimension `dim` and…",N,N],[5,"gmshModelGetBoundary",E,"Get the boundary of the model entities `dimTags`. Return…",N,N],[5,"gmshModelGetEntitiesInBoundingBox",E,"Get the model entities in the bounding box defined by the…",N,N],[5,"gmshModelGetBoundingBox",E,"Get the bounding box (`xmin`, `ymin`, `zmin`), (`xmax`,…",N,N],[5,"gmshModelGetDimension",E,"Get the geometrical dimension of the current model.",N,N],[5,"gmshModelAddDiscreteEntity",E,"Add a discrete model entity (defined by a mesh) of…",N,N],[5,"gmshModelRemoveEntities",E,"Remove the entities `dimTags` of the current model. If…",N,N],[5,"gmshModelRemoveEntityName",E,"Remove the entity name `name` from the current model.",N,N],[5,"gmshModelRemovePhysicalGroups",E,"Remove the physical groups `dimTags` of the current model.…",N,N],[5,"gmshModelRemovePhysicalName",E,"Remove the physical name `name` from the current model.",N,N],[5,"gmshModelGetType",E,"Get the type of the entity of dimension `dim` and tag `tag`.",N,N],[5,"gmshModelGetParent",E,"In a partitioned model, get the parent of the entity of…",N,N],[5,"gmshModelGetPartitions",E,"In a partitioned model, return the tags of the…",N,N],[5,"gmshModelGetValue",E,"Evaluate the parametrization of the entity of dimension…",N,N],[5,"gmshModelGetDerivative",E,"Evaluate the derivative of the parametrization of the…",N,N],[5,"gmshModelGetCurvature",E,"Evaluate the (maximum) curvature of the entity of…",N,N],[5,"gmshModelGetPrincipalCurvatures",E,"Evaluate the principal curvatures of the surface with tag…",N,N],[5,"gmshModelGetNormal",E,"Get the normal to the surface with tag `tag` at the…",N,N],[5,"gmshModelSetVisibility",E,"Set the visibility of the model entities `dimTags` to…",N,N],[5,"gmshModelGetVisibility",E,"Get the visibility of the model entity of dimension `dim`…",N,N],[5,"gmshModelSetColor",E,"Set the color of the model entities `dimTags` to the RGBA…",N,N],[5,"gmshModelGetColor",E,"Get the color of the model entity of dimension `dim` and…",N,N],[5,"gmshModelSetCoordinates",E,"Set the `x`, `y`, `z` coordinates of a geometrical point.",N,N],[5,"gmshModelMeshGenerate",E,"Generate a mesh of the current model, up to dimension…",N,N],[5,"gmshModelMeshPartition",E,"Partition the mesh of the current model into `numPart`…",N,N],[5,"gmshModelMeshUnpartition",E,"Unpartition the mesh of the current model.",N,N],[5,"gmshModelMeshOptimize",E,"Optimize the mesh of the current model using `method`…",N,N],[5,"gmshModelMeshRecombine",E,"Recombine the mesh of the current model.",N,N],[5,"gmshModelMeshRefine",E,"Refine the mesh of the current model by uniformly…",N,N],[5,"gmshModelMeshSmooth",E,"Smooth the mesh of the current model.",N,N],[5,"gmshModelMeshSetOrder",E,"Set the order of the elements in the mesh of the current…",N,N],[5,"gmshModelMeshGetLastEntityError",E,"Get the last entities (if any) where a meshing error…",N,N],[5,"gmshModelMeshGetLastNodeError",E,"Get the last nodes (if any) where a meshing error…",N,N],[5,"gmshModelMeshClear",E,"Clear the mesh, i.e. delete all the nodes and elements.",N,N],[5,"gmshModelMeshGetNodes",E,"Get the nodes classified on the entity of dimension `dim`…",N,N],[5,"gmshModelMeshGetNodesByElementType",E,"Get the nodes classified on the entity of tag `tag`, for…",N,N],[5,"gmshModelMeshGetNode",E,"Get the coordinates and the parametric coordinates (if…",N,N],[5,"gmshModelMeshRebuildNodeCache",E,"Rebuild the node cache.",N,N],[5,"gmshModelMeshGetNodesForPhysicalGroup",E,"Get the nodes from all the elements belonging to the…",N,N],[5,"gmshModelMeshAddNodes",E,"Add nodes classified on the model entity of dimension…",N,N],[5,"gmshModelMeshReclassifyNodes",E,"Reclassify all nodes on their associated model entity,…",N,N],[5,"gmshModelMeshRelocateNodes",E,"Relocate the nodes classified on the entity of dimension…",N,N],[5,"gmshModelMeshGetElements",E,"Get the elements classified on the entity of dimension…",N,N],[5,"gmshModelMeshGetElement",E,"Get the type and node tags of the element with tag `tag`.…",N,N],[5,"gmshModelMeshGetElementByCoordinates",E,"Search the mesh for an element located at coordinates…",N,N],[5,"gmshModelMeshGetElementTypes",E,"Get the types of elements in the entity of dimension `dim`…",N,N],[5,"gmshModelMeshGetElementType",E,"Return an element type given its family name `familyName`…",N,N],[5,"gmshModelMeshGetElementProperties",E,"Get the properties of an element of type `elementType`:…",N,N],[5,"gmshModelMeshGetElementsByType",E,"Get the elements of type `elementType` classified on the…",N,N],[5,"gmshModelMeshPreallocateElementsByType",E,"Preallocate data before calling `getElementsByType` with…",N,N],[5,"gmshModelMeshAddElements",E,"Add elements classified on the entity of dimension `dim`…",N,N],[5,"gmshModelMeshAddElementsByType",E,"Add elements of type `elementType` classified on the…",N,N],[5,"gmshModelMeshGetIntegrationPoints",E,"Get the numerical quadrature information for the given…",N,N],[5,"gmshModelMeshGetJacobians",E,"Get the Jacobians of all the elements of type…",N,N],[5,"gmshModelMeshPreallocateJacobians",E,"Preallocate data before calling `getJacobians` with…",N,N],[5,"gmshModelMeshGetBasisFunctions",E,"Get the basis functions of the element of type…",N,N],[5,"gmshModelMeshGetBasisFunctionsForElements",E,"Get the element-dependent basis functions of the elements…",N,N],[5,"gmshModelMeshGetKeysForElements",E,"Generate the `keys` for the elements of type `elementType`…",N,N],[5,"gmshModelMeshGetInformationForElements",E,"Get information about the `keys`. `infoKeys` returns…",N,N],[5,"gmshModelMeshPrecomputeBasisFunctions",E,"Precomputes the basis functions corresponding to…",N,N],[5,"gmshModelMeshGetBarycenters",E,"Get the barycenters of all elements of type `elementType`…",N,N],[5,"gmshModelMeshPreallocateBarycenters",E,"Preallocate data before calling `getBarycenters` with…",N,N],[5,"gmshModelMeshGetElementEdgeNodes",E,"Get the nodes on the edges of all elements of type…",N,N],[5,"gmshModelMeshGetElementFaceNodes",E,"Get the nodes on the faces of type `faceType` (3 for…",N,N],[5,"gmshModelMeshGetGhostElements",E,"Get the ghost elements `elementTags` and their associated…",N,N],[5,"gmshModelMeshSetSize",E,R[1],N,N],[5,"gmshModelMeshSetTransfiniteCurve",E,R[2],N,N],[5,"gmshModelMeshSetTransfiniteSurface",E,R[0],N,N],[5,"gmshModelMeshSetTransfiniteVolume",E,R[0],N,N],[5,"gmshModelMeshSetRecombine",E,R[3],N,N],[5,"gmshModelMeshSetSmoothing",E,R[4],N,N],[5,"gmshModelMeshSetReverse",E,R[5],N,N],[5,"gmshModelMeshSetOutwardOrientation",E,"Set meshing constraints on the bounding surfaces of the…",N,N],[5,"gmshModelMeshEmbed",E,"Embed the model entities of dimension `dim` and tags…",N,N],[5,"gmshModelMeshRemoveEmbedded",E,"Remove embedded entities from the model entities…",N,N],[5,"gmshModelMeshReorderElements",E,"Reorder the elements of type `elementType` classified on…",N,N],[5,"gmshModelMeshRenumberNodes",E,"Renumber the node tags in a continuous sequence.",N,N],[5,"gmshModelMeshRenumberElements",E,"Renumber the element tags in a continuous sequence.",N,N],[5,"gmshModelMeshSetPeriodic",E,"Set the meshes of the entities of dimension `dim` and tag…",N,N],[5,"gmshModelMeshGetPeriodicNodes",E,"Get the master entity `tagMaster`, the node tags…",N,N],[5,"gmshModelMeshRemoveDuplicateNodes",E,"Remove duplicate nodes in the mesh of the current model.",N,N],[5,"gmshModelMeshSplitQuadrangles",E,"Split (into two triangles) all quadrangles in surface…",N,N],[5,"gmshModelMeshClassifySurfaces",E,"Classify (\"color\") the surface mesh based on the angle…",N,N],[5,"gmshModelMeshCreateGeometry",E,"Create a parametrization for discrete curves and surfaces…",N,N],[5,"gmshModelMeshCreateTopology",E,"Create a boundary representation from the mesh if the…",N,N],[5,"gmshModelMeshComputeHomology",E,"Compute a basis representation for homology spaces after a…",N,N],[5,"gmshModelMeshComputeCohomology",E,"Compute a basis representation for cohomology spaces after…",N,N],[5,"gmshModelMeshFieldAdd",E,"Add a new mesh size field of type `fieldType`. If `tag` is…",N,N],[5,"gmshModelMeshFieldRemove",E,"Remove the field with tag `tag`.",N,N],[5,"gmshModelMeshFieldSetNumber",E,"Set the numerical option `option` to value `value` for…",N,N],[5,"gmshModelMeshFieldSetString",E,"Set the string option `option` to value `value` for field…",N,N],[5,"gmshModelMeshFieldSetNumbers",E,"Set the numerical list option `option` to value `value`…",N,N],[5,"gmshModelMeshFieldSetAsBackgroundMesh",E,"Set the field `tag` as the background mesh size field.",N,N],[5,"gmshModelMeshFieldSetAsBoundaryLayer",E,"Set the field `tag` as a boundary layer size field.",N,N],[5,"gmshModelGeoAddPoint",E,"Add a geometrical point in the built-in CAD…",N,N],[5,"gmshModelGeoAddLine",E,R[6],N,N],[5,"gmshModelGeoAddCircleArc",E,"Add a circle arc (strictly smaller than Pi) between the…",N,N],[5,"gmshModelGeoAddEllipseArc",E,"Add an ellipse arc (strictly smaller than Pi) between the…",N,N],[5,"gmshModelGeoAddSpline",E,"Add a spline (Catmull-Rom) curve going through the points…",N,N],[5,"gmshModelGeoAddBSpline",E,"Add a cubic b-spline curve with `pointTags` control…",N,N],[5,"gmshModelGeoAddBezier",E,R[7],N,N],[5,"gmshModelGeoAddCurveLoop",E,R[8],N,N],[5,"gmshModelGeoAddPlaneSurface",E,"Add a plane surface defined by one or more curve loops…",N,N],[5,"gmshModelGeoAddSurfaceFilling",E,"Add a surface filling the curve loops in `wireTags`.…",N,N],[5,"gmshModelGeoAddSurfaceLoop",E,R[9],N,N],[5,"gmshModelGeoAddVolume",E,"Add a volume (a region) defined by one or more shells…",N,N],[5,"gmshModelGeoExtrude",E,R[10],N,N],[5,"gmshModelGeoRevolve",E,R[11],N,N],[5,"gmshModelGeoTwist",E,"Extrude the model entities `dimTags` by a combined…",N,N],[5,"gmshModelGeoTranslate",E,R[12],N,N],[5,"gmshModelGeoRotate",E,R[13],N,N],[5,"gmshModelGeoDilate",E,R[14],N,N],[5,"gmshModelGeoSymmetrize",E,R[15],N,N],[5,"gmshModelGeoCopy",E,R[16],N,N],[5,"gmshModelGeoRemove",E,R[17],N,N],[5,"gmshModelGeoRemoveAllDuplicates",E,R[18],N,N],[5,"gmshModelGeoSynchronize",E,"Synchronize the built-in CAD representation with the…",N,N],[5,"gmshModelGeoMeshSetSize",E,R[1],N,N],[5,"gmshModelGeoMeshSetTransfiniteCurve",E,R[2],N,N],[5,"gmshModelGeoMeshSetTransfiniteSurface",E,R[0],N,N],[5,"gmshModelGeoMeshSetTransfiniteVolume",E,R[0],N,N],[5,"gmshModelGeoMeshSetRecombine",E,R[3],N,N],[5,"gmshModelGeoMeshSetSmoothing",E,R[4],N,N],[5,"gmshModelGeoMeshSetReverse",E,R[5],N,N],[5,"gmshModelOccAddPoint",E,"Add a geometrical point in the OpenCASCADE CAD…",N,N],[5,"gmshModelOccAddLine",E,R[6],N,N],[5,"gmshModelOccAddCircleArc",E,"Add a circle arc between the two points with tags…",N,N],[5,"gmshModelOccAddCircle",E,"Add a circle of center (`x`, `y`, `z`) and radius `r`. If…",N,N],[5,"gmshModelOccAddEllipseArc",E,"Add an ellipse arc between the two points `startTag` and…",N,N],[5,"gmshModelOccAddEllipse",E,"Add an ellipse of center (`x`, `y`, `z`) and radii `r1`…",N,N],[5,"gmshModelOccAddSpline",E,"Add a spline (C2 b-spline) curve going through the points…",N,N],[5,"gmshModelOccAddBSpline",E,"Add a b-spline curve of degree `degree` with `pointTags`…",N,N],[5,"gmshModelOccAddBezier",E,R[7],N,N],[5,"gmshModelOccAddWire",E,"Add a wire (open or closed) formed by the curves…",N,N],[5,"gmshModelOccAddCurveLoop",E,R[8],N,N],[5,"gmshModelOccAddRectangle",E,"Add a rectangle with lower left corner at (`x`, `y`, `z`)…",N,N],[5,"gmshModelOccAddDisk",E,"Add a disk with center (`xc`, `yc`, `zc`) and radius `rx`…",N,N],[5,"gmshModelOccAddPlaneSurface",E,"Add a plane surface defined by one or more curve loops (or…",N,N],[5,"gmshModelOccAddSurfaceFilling",E,"Add a surface filling the curve loops in `wireTags`. If…",N,N],[5,"gmshModelOccAddSurfaceLoop",E,R[9],N,N],[5,"gmshModelOccAddVolume",E,"Add a volume (a region) defined by one or more surface…",N,N],[5,"gmshModelOccAddSphere",E,"Add a sphere of center (`xc`, `yc`, `zc`) and radius `r`.…",N,N],[5,"gmshModelOccAddBox",E,"Add a parallelepipedic box defined by a point (`x`, `y`,…",N,N],[5,"gmshModelOccAddCylinder",E,"Add a cylinder, defined by the center (`x`, `y`, `z`) of…",N,N],[5,"gmshModelOccAddCone",E,"Add a cone, defined by the center (`x`, `y`, `z`) of its…",N,N],[5,"gmshModelOccAddWedge",E,"Add a right angular wedge, defined by the right-angle…",N,N],[5,"gmshModelOccAddTorus",E,"Add a torus, defined by its center (`x`, `y`, `z`) and its…",N,N],[5,"gmshModelOccAddThruSections",E,"Add a volume (if the optional argument `makeSolid` is set)…",N,N],[5,"gmshModelOccAddThickSolid",E,"Add a hollowed volume built from an initial volume…",N,N],[5,"gmshModelOccExtrude",E,R[10],N,N],[5,"gmshModelOccRevolve",E,R[11],N,N],[5,"gmshModelOccAddPipe",E,"Add a pipe by extruding the entities `dimTags` along the…",N,N],[5,"gmshModelOccFillet",E,"Fillet the volumes `volumeTags` on the curves `curveTags`…",N,N],[5,"gmshModelOccChamfer",E,"Chamfer the volumes `volumeTags` on the curves `curveTags`…",N,N],[5,"gmshModelOccFuse",E,"Compute the boolean union (the fusion) of the entities…",N,N],[5,"gmshModelOccIntersect",E,"Compute the boolean intersection (the common parts) of the…",N,N],[5,"gmshModelOccCut",E,"Compute the boolean difference between the entities…",N,N],[5,"gmshModelOccFragment",E,"Compute the boolean fragments (general fuse) of the…",N,N],[5,"gmshModelOccTranslate",E,R[12],N,N],[5,"gmshModelOccRotate",E,R[13],N,N],[5,"gmshModelOccDilate",E,R[14],N,N],[5,"gmshModelOccSymmetrize",E,R[15],N,N],[5,"gmshModelOccAffineTransform",E,"Apply a general affine transformation matrix `a` (16…",N,N],[5,"gmshModelOccCopy",E,R[16],N,N],[5,"gmshModelOccRemove",E,R[17],N,N],[5,"gmshModelOccRemoveAllDuplicates",E,R[18],N,N],[5,"gmshModelOccHealShapes",E,"Apply various healing procedures to the entities `dimTags`…",N,N],[5,"gmshModelOccImportShapes",E,"Import BREP, STEP or IGES shapes from the file `fileName`.…",N,N],[5,"gmshModelOccImportShapesNativePointer",E,"Imports an OpenCASCADE `shape` by providing a pointer to a…",N,N],[5,"gmshModelOccSetMeshSize",E,R[1],N,N],[5,"gmshModelOccGetMass",E,"Get the mass of the model entity of dimension `dim` and…",N,N],[5,"gmshModelOccGetCenterOfMass",E,"Get the center of mass of the model entity of dimension…",N,N],[5,"gmshModelOccGetMatrixOfInertia",E,"Get the matrix of inertia (by row) of the model entity of…",N,N],[5,"gmshModelOccSynchronize",E,"Synchronize the OpenCASCADE CAD representation with the…",N,N],[5,"gmshViewAdd",E,"Add a new post-processing view, with name `name`. If `tag`…",N,N],[5,"gmshViewRemove",E,"Remove the view with tag `tag`.",N,N],[5,"gmshViewGetIndex",E,"Get the index of the view with tag `tag` in the list of…",N,N],[5,"gmshViewGetTags",E,"Get the tags of all views.",N,N],[5,"gmshViewAddModelData",E,"Add model-based post-processing data to the view with tag…",N,N],[5,"gmshViewGetModelData",E,"Get model-based post-processing data from the view with…",N,N],[5,"gmshViewAddListData",E,"Add list-based post-processing data to the view with tag…",N,N],[5,"gmshViewGetListData",E,"Get list-based post-processing data from the view with tag…",N,N],[5,"gmshViewAddAlias",E,"Add a post-processing view as an `alias` of the reference…",N,N],[5,"gmshViewCopyOptions",E,"Copy the options from the view with tag `refTag` to the…",N,N],[5,"gmshViewCombine",E,"Combine elements (if `what` == \"elements\") or steps (if…",N,N],[5,"gmshViewProbe",E,"Probe the view `tag` for its `value` at point (`x`, `y`,…",N,N],[5,"gmshViewWrite",E,"Write the view to a file `fileName`. The export format is…",N,N],[5,"gmshPluginSetNumber",E,"Set the numerical option `option` to the value `value` for…",N,N],[5,"gmshPluginSetString",E,"Set the string option `option` to the value `value` for…",N,N],[5,"gmshPluginRun",E,"Run the plugin `name`.",N,N],[5,"gmshGraphicsDraw",E,"Draw all the OpenGL scenes.",N,N],[5,"gmshFltkInitialize",E,"Create the FLTK graphical user interface. Can only be…",N,N],[5,"gmshFltkWait",E,"Wait at most `time` seconds for user interface events and…",N,N],[5,"gmshFltkUpdate",E,"Update the user interface (potentially creating new…",N,N],[5,"gmshFltkAwake",E,"Awake the main user interface thread and process pending…",N,N],[5,"gmshFltkLock",E,"Block the current thread until it can safely modify the…",N,N],[5,"gmshFltkUnlock",E,"Release the lock that was set using lock.",N,N],[5,"gmshFltkRun",E,"Run the event loop of the graphical user interface, i.e.…",N,N],[5,"gmshFltkSelectEntities",E,"Select entities in the user interface. If `dim` is >= 0,…",N,N],[5,"gmshFltkSelectElements",E,"Select elements in the user interface.",N,N],[5,"gmshFltkSelectViews",E,"Select views in the user interface.",N,N],[5,"gmshOnelabSet",E,"Set one or more parameters in the ONELAB database, encoded…",N,N],[5,"gmshOnelabGet",E,"Get all the parameters (or a single one if `name` is…",N,N],[5,"gmshOnelabSetNumber",E,"Set the value of the number parameter `name` in the ONELAB…",N,N],[5,"gmshOnelabSetString",E,"Set the value of the string parameter `name` in the ONELAB…",N,N],[5,"gmshOnelabGetNumber",E,"Get the value of the number parameter `name` from the…",N,N],[5,"gmshOnelabGetString",E,"Get the value of the string parameter `name` from the…",N,N],[5,"gmshOnelabClear",E,"Clear the ONELAB database, or remove a single parameter if…",N,N],[5,"gmshOnelabRun",E,"Run a ONELAB client. If `name` is provided, create a new…",N,N],[5,"gmshLoggerWrite",E,"Write a `message`. `level` can be \"info\", \"warning\" or…",N,N],[5,"gmshLoggerStart",E,"Start logging messages.",N,N],[5,"gmshLoggerGet",E,"Get logged messages.",N,N],[5,"gmshLoggerStop",E,"Stop logging messages.",N,N],[5,"gmshLoggerTime",E,"Return wall clock time.",N,N],[5,"gmshLoggerCputime",E,"Return CPU time.",N,N],[6,"wchar_t",E,E,N,N],[17,"GMSH_API_VERSION",E,E,N,N],[17,"GMSH_API_VERSION_MAJOR",E,E,N,N],[17,"GMSH_API_VERSION_MINOR",E,E,N,N],[11,"to_owned",E,E,0,[[["self"]],[T]]],[11,"clone_into",E,E,0,[[["self"],[T]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"try_from",E,E,0,[[[U]],["result"]]],[11,"try_into",E,E,0,[[],["result"]]],[11,"borrow_mut",E,E,0,[[["self"]],[T]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,"type_id",E,E,0,[[["self"]],["typeid"]]],[11,"clone",E,E,0,[[["self"]],[R[19]]]],[11,"fmt",E,E,0,[[["self"],["formatter"]],["result"]]]],"p":[[3,R[19]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
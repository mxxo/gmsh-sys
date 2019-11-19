#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
/*!
Low-level bindings to the Gmsh SDK.

Gmsh C API bindings (v4.4.1)

Gmsh is copyright (C) 1997-2019 by C. Geuzaine and J.-F. Remacle

By design, the Gmsh C API is purely functional, and only uses elementary types.
!*/

#![doc(html_logo_url = "https://gitlab.onelab.info/gmsh/gmsh/blob/master/utils/icons/gmsh.svg")]

// generated from gmshc.h @ commit d1769d55
include!("bindings.rs");

#[cfg(test)]
mod tests {
    use std::os::raw::{c_int};
    use std::ffi::CString;

    #[test]
    pub fn sanity() {
        // open gmsh
        let exec_name = CString::new("gmsh").unwrap();
        let mut ierr: c_int = 0;
        unsafe {
             crate::gmshInitialize(1 as c_int,
                [exec_name.into_raw()].as_mut_ptr(), 0 as c_int, &mut ierr);
        }

        // close gmsh
        let mut ierr: c_int = 0;
        unsafe {
            crate::gmshFinalize(&mut ierr);
        }
    }
}

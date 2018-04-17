It is called REVEALING CONSTRUCTOR pattern because the constructor is revealing its internal capabilities, but ONLY TO THE CODE THAT CONSTRUCTS.

The advantages of this is that ONLY the CONSTRUCTING CODE has access to internal functions (resolve and reject) and once the object is constructed it can passed around safely; no other code will be able internal functions (reject or resolve) and change the internal state of the object

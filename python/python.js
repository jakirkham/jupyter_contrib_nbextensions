define({
    'name' : 'Python',
    'sub-menu' : [
        {
            'name' : 'Future imports',
            'snippet' : ['from __future__ import print_function, division',],
        },

        {
            'name' : 'List comprehension',
            'snippet' : ['[x**2 for x in range(-10, 11)]',],
        },
        
        {
            'name' : 'Conditional list comprehension',
            'snippet' : ['[x**2 for x in range(-10, 11) if (x%3)==0]',],
        },
        
        {
            'name' : 'Define a simple function',
            'snippet'  : [
                'def bp_some_func(x):',
                '    r"""Brief description of the function"""',
                '    return x**2',
            ],
        },
        
        {
            'name' : 'Define a simple class',
            'snippet'  : [
                'class BPSomeClass(object):',
                '    r"""Describe the class"""',
                '    def __init__(self, arg1, arg2):',
                '        self.attr1 = arg1',
                '        self.attr2 = arg2',
                '    ',
                '    def attribute1(self):',
                '        return self.attr1',
                'bp_obj = BPSomeClass("a", 2.7182)',
                'bp_obj.attribute1()',
            ],
        },

        {
            'name' : 'Define a complicated function',
            'snippet'  : [
                'def bp_some_func(x, y, z=3.14, **kwargs):',
                '    r"""Some function',
                '    ',
                '    Does some stuff.',
                '    ',
                '    Parameters',
                '    ----------',
                '    x : int',
                '        Description of x',
                '    y : str',
                '        Description of y',
                '    z : float, optional',
                '        Description of z.  Defaults to 3.14',
                '    **kwargs',
                '        Arbitrary optional keyword arguments.',
                '        w : float',
                '            Defaults to 6.28',
                '    ',
                '    Returns',
                '    -------',
                '    double',
                '        Some nonsensical number computed from some ugly formula',
                '    ',
                '    """',
                '    w = kwargs.pop("w", 6.28)',
                '    if kwargs:',
                '        print("Got {0} unused kwargs".format(len(kwargs)))',
                '    return (x**2 + len(y)) * (w + z)',
            ],
        },

        {
            'name' : 'Define a complicated class',
            'snippet'  : [
                'class BPSomeClass(object):',
                '    """Brief class description',
                '    ',
                '    Some more extensive description',
                '    ',
                '    Attributes',
                '    ----------',
                '    attr1 : string',
                '        Purpose of attr1.',
                '    attr2 : float',
                '        Purpose of attr2.',
                '    ',
                '    """',
                '    ',
                '    def __init__(self, param1, param2, param3=0):',
                '        """Example of docstring on the __init__ method.',
                '        ',
                '        Parameters',
                '        ----------',
                '        param1 : str',
                '            Description of `param1`.',
                '        param2 : float',
                '            Description of `param2`.',
                '        param3 : int, optional',
                '            Description of `param3`, defaults to 0.',
                '        ',
                '        """',
                '        self.attr1 = param1',
                '        self.attr2 = param2',
                '        print(param3 // 4)',
                '    ',
                '    @property',
                '    def attribute2(self):',
                '        return self.attr2',
                '    ',
                '    @attribute2.setter',
                '    def attribute2(self, new_attr2):',
                '        if not isinstance(float, new_attr2):',
                '            raise ValueError("attribute2 must be a float, not {0}".format(new_attr2))',
                '        self.attr2 = new_attr2',
                '',
                '',
                'bp_obj = BPSomeClass("a", 1.618)',
                'print(bp_obj.attribute2)',
                'bp_obj.attribute2 = 3.236',
                '',
            ],
        },

        {
            'name' : 'Define a subclass',
            'snippet'  : [
                'class BP_A(object):',
                '    def __init__(self, param1):',
                '        self.attr1 = param1',
                '',
                'class BP_B(BP_A):',
                '    def __init__(self, param1, param2):',
                '        super(BP_B, self).__init__(param1)',
                '        self.attr2 = param2',
                '',
                '',
                'bp_b = BP_B("a", "b")',
                'print(bp_b.attr1, bp_b.attr2)',
            ],
        },
    ],
});

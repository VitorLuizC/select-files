**[selectFiles](README.md)**

[Globals](README.md)

## Index

### Type aliases

* [InputFile](README.md#inputfile)
* [Options](README.md#options)

### Functions

* [createInputFile](README.md#const-createinputfile)
* [runOnIddle](README.md#const-runoniddle)
* [selectFiles](README.md#const-selectfiles)

## Type aliases

###  InputFile

Ƭ **InputFile**: *HTMLInputElement & object*

*Defined in [index.ts:1](https://github.com/VitorLuizC/select-files/blob/66fc488/src/index.ts#L1)*

___

###  Options

Ƭ **Options**: *object*

*Defined in [index.ts:5](https://github.com/VitorLuizC/select-files/blob/66fc488/src/index.ts#L5)*

#### Type declaration:

* **accept**? : *undefined | string*

* **capture**? : *string | boolean*

* **multiple**? : *undefined | false | true*

## Functions

### `Const` createInputFile

▸ **createInputFile**(`__namedParameters`: object): *[InputFile](README.md#inputfile)*

*Defined in [index.ts:11](https://github.com/VitorLuizC/select-files/blob/66fc488/src/index.ts#L11)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default |
------ | ------ | ------ |
`accept` | string | "" |
`capture` | string \| false \| true | false |
`multiple` | boolean | false |

**Returns:** *[InputFile](README.md#inputfile)*

___

### `Const` runOnIddle

▸ **runOnIddle**(`fn`: function): *Timeout*

*Defined in [index.ts:26](https://github.com/VitorLuizC/select-files/blob/66fc488/src/index.ts#L26)*

**Parameters:**

▪ **fn**: *function*

▸ (): *void*

**Returns:** *Timeout*

___

### `Const` selectFiles

▸ **selectFiles**(`options`: [Options](README.md#options)): *Promise‹null | FileList›*

*Defined in [index.ts:28](https://github.com/VitorLuizC/select-files/blob/66fc488/src/index.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](README.md#options) |

**Returns:** *Promise‹null | FileList›*
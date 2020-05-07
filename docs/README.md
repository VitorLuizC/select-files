[selectFiles](README.md)

# selectFiles

## Index

### Type aliases

* [InputFile](README.md#inputfile)
* [Options](README.md#options)

### Functions

* [createInputFile](README.md#const-createinputfile)
* [selectFiles](README.md#const-selectfiles)

## Type aliases

###  InputFile

Ƭ **InputFile**: *HTMLInputElement & object*

*Defined in [index.ts:4](https://github.com/VitorLuizC/select-files/blob/424c1f7/src/index.ts#L4)*

Custom type for file input element (`<input type="file" />`).

___

###  Options

Ƭ **Options**: *object*

*Defined in [index.ts:12](https://github.com/VitorLuizC/select-files/blob/424c1f7/src/index.ts#L12)*

Type of options for file input element (`<input type="file" />`) virtually
created to select files.

#### Type declaration:

* **accept**? : *undefined | string*

* **capture**? : *string | boolean*

* **multiple**? : *undefined | false | true*

## Functions

### `Const` createInputFile

▸ **createInputFile**(`__namedParameters`: object): *[InputFile](README.md#inputfile)*

*Defined in [index.ts:41](https://github.com/VitorLuizC/select-files/blob/424c1f7/src/index.ts#L41)*

Creates a virtual file input element (`<input type="file" />`) with options.

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`accept` | string | "" |
`capture` | string &#124; false &#124; true | false |
`multiple` | boolean | false |

**Returns:** *[InputFile](README.md#inputfile)*

___

### `Const` selectFiles

▸ **selectFiles**(`options?`: [Options](README.md#options)): *Promise‹null | FileList›*

*Defined in [index.ts:67](https://github.com/VitorLuizC/select-files/blob/424c1f7/src/index.ts#L67)*

Virtually creates a file input element (`<input type="file" />`), triggers it
and returns selected files.

**`example`** 
selectFiles({ accept: 'image/*', multiple: true }).then(files => {
  // ...
});

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [Options](README.md#options) |   |

**Returns:** *Promise‹null | FileList›*

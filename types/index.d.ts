/**
 * Type of options for file input element (`<input type="file" />`) virtually
 * created to select files.
 */
export declare type Options = {
    /**
     * Defines accepted file types. It's a comma-separated list of file
     * extensions, mime-types or unique file type specifiers.
     *
     * https://developer.mozilla.org/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
     *
     * @example ```js
     * "image/*,video/*,.pdf,.doc,.docx,.xls"
     * ```
     */
    accept?: string;
    /**
     * Combined with `accept` property it specifies which camera to use for
     * capture of image or video. It was previously a Boolean value.
     */
    capture?: string | boolean;
    /**
     * Allow multiple files selection.
     */
    multiple?: boolean;
};
/**
 * Virtually creates a file input element (`<input type="file" />`), triggers it
 * and returns selected files.
 *
 * @example
 * selectFiles({ accept: 'image/*', multiple: true }).then(files => {
 *   // ...
 * });
 *
 * @param options
 */
declare const selectFiles: (options?: Options | undefined) => Promise<FileList | null>;
export default selectFiles;
//# sourceMappingURL=index.d.ts.map
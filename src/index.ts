type InputFile = HTMLInputElement & {
  capture: boolean | string;
};

export type Options = {
  accept?: string;
  capture?: string | boolean;
  multiple?: boolean;
};

const createInputFile = ({
  accept = '',
  capture = false,
  multiple = false
}: Options = {}): InputFile => {
  const input = document.createElement('input') as InputFile;

  input.type = 'file';
  input.accept = accept;
  input.capture = capture;
  input.multiple = multiple;

  return input;
};

const runOnIddle = (fn: () => void) => setTimeout(() => fn(), 0);

const selectFiles = (options: Options) =>
  new Promise<null | FileList>(resolve => {
    const input = createInputFile(options);

    input.addEventListener('change', () => resolve(input.files || null));

    runOnIddle(() => {
      const event = new MouseEvent('click');
      input.dispatchEvent(event);
    });
  });

export default selectFiles;

import selectFiles from './';

const MouseEventMock = jest.fn<unknown, any>();

Object.defineProperty(global, 'MouseEvent', {
  value: MouseEventMock,
});

const HTMLInputElementMock = {
  addEventListener: jest.fn<void, [string, () => void]>(),
  dispatchEvent: jest.fn<void, [Event]>(),
};

Object.defineProperty(global, 'HTMLInputElement', {
  value: HTMLInputElementMock,
});

const documentMock = {
  createElement: jest.fn<object, [string]>(),
};

Object.defineProperty(global, 'document', {
  value: documentMock,
});

describe('unit | selectFiles', () => {
  describe('when select files', () => {
    it('creates a file input element', async () => {
      documentMock.createElement.mockReturnValueOnce(HTMLInputElementMock);

      let fn: () => void;
      HTMLInputElementMock.addEventListener.mockImplementationOnce((_, _fn) => {
        fn = _fn;
      });
      HTMLInputElementMock.dispatchEvent.mockImplementationOnce(() => {
        fn();
      });

      await selectFiles();

      expect(documentMock.createElement).toHaveBeenCalledWith('input');
    });

    it("listens file input element's change event", async () => {
      documentMock.createElement.mockReturnValueOnce(HTMLInputElementMock);

      let fn: () => void;
      HTMLInputElementMock.addEventListener.mockImplementationOnce((_, _fn) => {
        fn = _fn;
      });
      HTMLInputElementMock.dispatchEvent.mockImplementationOnce(() => {
        fn();
      });

      await selectFiles();

      expect(HTMLInputElementMock.addEventListener).toHaveBeenCalledWith(
        'change',
        expect.any(Function),
      );
    });

    it("dispatches file input element's click", async () => {
      documentMock.createElement.mockReturnValueOnce(HTMLInputElementMock);

      let fn: () => void;
      HTMLInputElementMock.addEventListener.mockImplementationOnce((_, _fn) => {
        fn = _fn;
      });
      HTMLInputElementMock.dispatchEvent.mockImplementationOnce(() => {
        fn();
      });

      await selectFiles();

      expect(MouseEventMock).toHaveBeenCalledWith('click');
      expect(HTMLInputElementMock.dispatchEvent).toHaveBeenCalledWith(
        expect.any(MouseEventMock),
      );
    });

    it('resolves file input element files', async () => {
      const input = Object.assign({}, HTMLInputElementMock, {
        files: ['Avatar.png'],
      });

      documentMock.createElement.mockReturnValueOnce(input);

      let fn: () => void;
      HTMLInputElementMock.addEventListener.mockImplementationOnce((_, _fn) => {
        fn = _fn;
      });
      HTMLInputElementMock.dispatchEvent.mockImplementationOnce(() => {
        fn();
      });

      expect(await selectFiles()).toEqual(input.files);
    });
  });

  describe('when change file input element attributes', () => {
    it('define file input element attributes', async () => {
      const input = Object.assign({}, HTMLInputElementMock, {
        files: ['Avatar.png'],
      });

      documentMock.createElement.mockReturnValueOnce(input);

      let fn: () => void;
      HTMLInputElementMock.addEventListener.mockImplementationOnce((_, _fn) => {
        fn = _fn;
      });
      HTMLInputElementMock.dispatchEvent.mockImplementationOnce(() => {
        fn();
      });

      await selectFiles({
        accept: 'image/*',
        capture: 'camera',
        multiple: true,
      });

      expect(input).toEqual(
        expect.objectContaining({
          accept: 'image/*',
          capture: 'camera',
          multiple: true,
        }),
      );
    });
  });
});

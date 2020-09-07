import {HashtagPipe} from './hashtag.pipe';

describe('HashtagPipe', () => {

  it('create an instance', () => {
    const pipe = new HashtagPipe();
    expect(pipe).toBeTruthy();
  });

  describe('validate transformation', () => {

    it('validate transformation with hashtag', () => {
      const pipe = new HashtagPipe();
      const value = 'test #text with #hashtags';
      const expectedValue = 'test <span class="hashtag">#text</span> with <span class="hashtag">#hashtags</span>';

      const result = pipe.transform(value);

      expect(result).toEqual(expectedValue);
    });

    it('validate transformation without any hashtag', () => {
      const pipe = new HashtagPipe();
      const value = 'test text without hashtags';

      const result = pipe.transform(value);

      expect(result).toEqual(value);
    });

  });

});

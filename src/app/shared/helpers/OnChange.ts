interface PropChange<T> {
  firstChange: boolean;
  previousValue: T;
  currentValue: T;
  isFirstChange: () => boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function OnChange<T, Self extends object>(
  callback: (value: T, self: Self, simpleChange?: PropChange<T>) => void
) {
  return (target: Self, key: string) => {
    const cacheKey = '__' + key + '_cached';
    const firstChangeKey = '__' + key + '_firstChange';

    Object.defineProperty(target, key, {
      set: function (value) {
        // No operation if new value is same as old value
        if (!this[firstChangeKey] && this[cacheKey] === value) {
          return;
        }
        const oldValue = this[cacheKey];
        this[cacheKey] = value;
        const simpleChange: PropChange<T> = {
          firstChange: this[firstChangeKey],
          previousValue: oldValue,
          currentValue: this[cacheKey],
          isFirstChange: () => this[firstChangeKey],
        };
        this[firstChangeKey] = false;
        callback.call(this, this[cacheKey], this, simpleChange);
      },
      get: function () {
        return this[cacheKey];
      },
    });
  };
}

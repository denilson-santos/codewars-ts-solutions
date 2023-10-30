export class Kata {
  static validatePin(pin: string): boolean {
    let output = false;

    if (pin.length === 4 || pin.length === 6) {
      output = true;

      pin.split('').forEach((item) => {
        if (!Number.isInteger(parseInt(item))) output = false;
      });
    }

    return output;
  }
}

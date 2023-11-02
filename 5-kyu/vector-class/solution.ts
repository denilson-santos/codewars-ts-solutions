export class Vector {
  public constructor(private list: number[]) {}

  public add(vector: Vector): Vector {
    let array1 = this.toArray();
    let array2 = vector.toArray();

    if (!this.isEqualLengths(this, vector)) {
      throw new Error('Vector lenghts is not equal');
    }

    let newArray = array1.map((item, index) => {
      return item + array2[index];
    });

    return new Vector(newArray);
  }

  public subtract(vector: Vector): Vector {
    let array1 = this.toArray();
    let array2 = vector.toArray();

    if (!this.isEqualLengths(this, vector)) {
      throw new Error('Vector lenghts is not equal');
    }

    let newArray = array1.map((item, index) => {
      return item - array2[index];
    });

    return new Vector(newArray);
  }

  public dot(vector: Vector): number {
    let array1 = this.toArray();
    let array2 = vector.toArray();

    if (!this.isEqualLengths(this, vector)) {
      throw new Error('Vector lenghts is not equal');
    }

    return array1.reduce((total, item, index) => {
      return (total += item * array2[index]);
    }, 0);
  }

  public norm(): number {
    let total = this.list.reduce((total, item) => {
      return (total += item ** 2);
    }, 0);

    return Math.sqrt(total);
  }

  public toString(): string {
    return `(${this.list.toString()})`;
  }

  public toArray(): number[] {
    return this.list;
  }

  public equals(vector: Vector): boolean {
    let isEquals = true;
    let array1 = this.toArray();
    let array2 = vector.toArray();

    if (!this.isEqualLengths(this, vector)) {
      return false;
    }

    array1.forEach((item, index) => {
      if (item != array2[index]) isEquals = false;
    });

    return isEquals;
  }

  private isEqualLengths(vector1: Vector, vector2: Vector): boolean {
    return vector1.toArray().length === vector2.toArray().length;
  }
}

import Shape from '../shape';
import { getBBoxFromPoints } from '../util/bbox';

class Polygon extends Shape {
  _initProperties() {
    super._initProperties();
    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'polygon';
  }

  getDefaultAttrs() {
    return {
      points: null,
      lineWidth: 0
    };
  }

  createPath(context) {
    const self = this;
    const attrs = self.get('attrs');
    const points = attrs.points;

    context.beginPath();

    for (let i = 0, len = points.length; i < len; i++) {
      const point = points[i];
      if (i === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    }
    context.closePath();
  }

  calculateBox() {
    const attrs = this.get('attrs');
    const { points } = attrs;
    return getBBoxFromPoints(points);
  }
}

Shape.Polygon = Polygon;
export default Polygon;

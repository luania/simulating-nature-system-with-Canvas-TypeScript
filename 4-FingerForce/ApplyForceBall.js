var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../commons/script/Ball"], function (require, exports, Ball_1) {
    "use strict";
    var ApplyForceBall = (function (_super) {
        __extends(ApplyForceBall, _super);
        function ApplyForceBall() {
            var _this = _super.apply(this, arguments) || this;
            _this.mass = 1;
            return _this;
        }
        ApplyForceBall.prototype.setMass = function (mass) {
            this.mass = mass;
            return this;
        };
        ApplyForceBall.prototype.applyForce = function (force) {
            this.acceleration = force.div(this.mass);
        };
        return ApplyForceBall;
    }(Ball_1.Ball));
    exports.ApplyForceBall = ApplyForceBall;
});
//# sourceMappingURL=ApplyForceBall.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineSubmission = exports.OnlineSubmission = void 0;
// Concrete Implementor 1: Online Submission Method
var OnlineSubmission = /** @class */ (function () {
    function OnlineSubmission() {
    }
    OnlineSubmission.prototype.submit = function (assignment) {
        console.log("Submitting assignment \"".concat(assignment, "\" online."));
    };
    return OnlineSubmission;
}());
exports.OnlineSubmission = OnlineSubmission;
// Concrete Implementor 2: Offline Submission Method
var OfflineSubmission = /** @class */ (function () {
    function OfflineSubmission() {
    }
    OfflineSubmission.prototype.submit = function (assignment) {
        console.log("Submitting assignment \"".concat(assignment, "\" offline."));
    };
    return OfflineSubmission;
}());
exports.OfflineSubmission = OfflineSubmission;

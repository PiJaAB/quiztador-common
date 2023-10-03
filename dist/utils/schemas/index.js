"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendRequestSchema = exports.UserOwnedGameProductSchema = exports.QuestionSchema = exports.AppStoreProductSchema = void 0;
__exportStar(require("./userSchema"), exports);
__exportStar(require("./participantSchema"), exports);
__exportStar(require("./gameSchema"), exports);
__exportStar(require("./categorySchema"), exports);
__exportStar(require("./gameProductSchema"), exports);
var appStoreProductSchema_1 = require("./appStoreProductSchema");
Object.defineProperty(exports, "AppStoreProductSchema", { enumerable: true, get: function () { return __importDefault(appStoreProductSchema_1).default; } });
var questionSchema_1 = require("./questionSchema");
Object.defineProperty(exports, "QuestionSchema", { enumerable: true, get: function () { return __importDefault(questionSchema_1).default; } });
var userOwnedGameProductSchema_1 = require("./userOwnedGameProductSchema");
Object.defineProperty(exports, "UserOwnedGameProductSchema", { enumerable: true, get: function () { return __importDefault(userOwnedGameProductSchema_1).default; } });
var friendRequestSchema_1 = require("./friendRequestSchema");
Object.defineProperty(exports, "FriendRequestSchema", { enumerable: true, get: function () { return __importDefault(friendRequestSchema_1).default; } });

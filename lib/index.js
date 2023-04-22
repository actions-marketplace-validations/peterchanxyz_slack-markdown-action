"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const mack_1 = require("@tryfabric/mack");
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const text = (0, core_1.getInput)('text');
        const changelog = (0, core_1.getInput)('changelog', { required: true });
        const blocks = yield (0, mack_1.markdownToBlocks)(changelog);
        const payload = {
            text: text,
            blocks: blocks,
        };
        (0, core_1.setOutput)("payload", JSON.stringify(payload));
    }
    catch (e) {
        if (e instanceof Error) {
            (0, core_1.setFailed)(e.message);
        }
    }
});
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBNkQ7QUFDN0QsMENBQW1EO0FBRW5ELE1BQU0sR0FBRyxHQUFHLEdBQVMsRUFBRTtJQUNuQixJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsSUFBQSxlQUFRLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBQSxlQUFRLEVBQUMsV0FBVyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLHVCQUFnQixFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sT0FBTyxHQUFHO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFBO1FBQ0QsSUFBQSxnQkFBUyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDakQ7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRTtZQUNwQixJQUFBLGdCQUFTLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO0tBQ0o7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQUVELEdBQUcsRUFBRSxDQUFBIn0=
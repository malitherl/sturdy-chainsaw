const chai = require("chai");
const deepEqual = chai.assert.deepEqual;
chai.config.truncateThreshold = 0;

function doTest(field, vKnightLeft, vKnightRight, expected) {
	const log = `for vKnightLeft = ${vKnightLeft}, vKnightRight = ${vKnightRight} and field:\n${JSON.stringify(field)}\n`;
	const actual = joust(field, vKnightLeft, vKnightRight);
	deepEqual(actual, expected, log);
}

describe("Tests suite", function () {
	it("Sample jousting", function () {
		doTest([
			"$->    ",
			"    <-P"
		], 1, 1, [
			" $->   ",
			"   <-P "
		]);
		doTest([
			"$->     ",
			"     <-P"
		], 1, 1, [
			"  $->   ",
			"   <-P  "
		]);
		doTest([
			"$->              ",
			"              <-P"
		], 1, 1, [
			"      $->        ",
			"        <-P      "
		]);
	});

	it("Sample jousting with different velocity", function () {
		doTest([
			"$->    ",
			"    <-P"
		], 3, 3, [
			"   $-> ",
			" <-P   "
		]);
		doTest([
			"$->   ",
			"   <-P"
		], 3, 3, [
			"   $->",
			"<-P   "
		]);
		doTest([
			"$->     ",
			"     <-P"
		], 0, 2, [
			"$->     ",
			" <-P    "
		]);
		doTest([
			"$->              ",
			"              <-P"
		], 2, 3, [
			"      $->        ",
			"     <-P         "
		]);
	});

	it("Immediate battle", function () {
		doTest([
			"$->  ",
			"  <-P"
		], 3, 3, [
			"$->  ",
			"  <-P"
		]);
		doTest([
			"$->",
			"<-P"
			], 3, 3,
			[
			"$->",
			"<-P"
		]);
		doTest([
			"$-> ",
			" <-P"
		], 0, 0, [
			"$-> ",
			" <-P"
		]);
	});

	it("Knights refused to fight", function () {
		doTest([
			"$->    ",
			"    <-P"
		], 0, 0, [
			"$->    ",
			"    <-P"
		]);
	});
});
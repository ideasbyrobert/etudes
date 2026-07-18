import XCTest
@testable import RelationalModel

final class IntegerValueBoundsTests: XCTestCase
{
	func testSigned64BitBoundsArePreserved()
	{
		let minimum = Value.integer(Int64.min)
		let maximum = Value.integer(Int64.max)
		
		guard
			case let .integer(storedMinimum) = minimum,
			case let .integer(storedMaximum) = maximum
		else
		{
			return XCTFail("Expected integer values")
		}
		
		XCTAssertEqual(storedMinimum, Int64.min)
		XCTAssertEqual(storedMaximum, Int64.max)
	}
}

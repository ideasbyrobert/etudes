
import XCTest
@testable import RelationalModel

final class BooleanValueIdentityTests: XCTestCase
{
	func testEqualBooleanValuesShareSetIdentity()
	{
		let values: Set<Value> = [
			.boolean(true),
			.boolean(true),
			.boolean(false)
		]

		XCTAssertEqual(values.count, 2)
	}
}

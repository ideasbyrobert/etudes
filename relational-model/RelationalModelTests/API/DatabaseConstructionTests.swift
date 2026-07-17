import XCTest
import RelationalModel

final class DatabaseConstructionTests: XCTestCase
{
	func testPublicInitializerConstructsDatabase()
	{
		let _: Database = Database()
	}
}

require "test_helper"

class Api::V1::ListsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_lists_index_url
    assert_response :success
    lists = @response.parsed_body
    assert_equal "MyString", lists[0].title
  end

  test "should get create" do
    get api_v1_lists_create_url
    assert_response :success
  end
end

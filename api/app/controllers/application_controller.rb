# ApplicationController
class ApplicationController < ActionController::API
  include ActionController::Cookies
  def authenticate_user!
    render status: 401, json: { message: "Users is unauthorized." } unless session[:user_id]
  end
end

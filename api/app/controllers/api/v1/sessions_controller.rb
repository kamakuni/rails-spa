# SessionsController
class Api::V1::SessionsController < ApplicationController
  # before_action :authenticate_user!, only: [:destory]
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { message: "You have successfully logged in." }
    else
      render status: 400, json: { message: "Authentication failed." }
    end
  end

  def destory
    session.delete(:user_id)
    render json: { message: "You have successfully logged out." }
  end
end

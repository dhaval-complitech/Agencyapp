class Api::V1::BaseController < ApplicationController
  skip_before_filter  :verify_authenticity_token
end

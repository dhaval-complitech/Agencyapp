class Api::V1::AgencyApp::AgenciesController < Api::V1::BaseController

  # POST /agencies
  # POST /agencies.json
  def create
    @agency = Agency.new(agency_params)
    @agency.tag_list = params[:tags]
    @agency.save
  end

  def filter_agencies
    if (params[:tags].present? && params[:name].present?)
      @agencies = Agency.tagged_with(params[:tags], :any => true,:wild => true).where("name ILIKE ? ","%#{params[:name]}%").order(:grade)
    elsif params[:tags].present?
      @agencies = Agency.tagged_with(params[:tags], :any => true,:wild => true).order(:grade)
    elsif params[:name].present?
      @agencies = Agency.where("name ILIKE ? ","%#{params[:name]}%").order(:grade)
    else
      @agencies =  Agency.order(:grade)
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.


  # Never trust parameters from the scary internet, only allow the white list through.
  def agency_params
    params.require(:agency).permit(:name,:description,:tags,:grade)
  end
end

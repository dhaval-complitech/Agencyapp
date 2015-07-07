json.agencies @agencies do |agency|
  json.agency_id agency.id
  json.name agency.name
  json.grade agency.grade
  json.description agency.description
  json.tags agency.tags.pluck(:name).join(',')
end
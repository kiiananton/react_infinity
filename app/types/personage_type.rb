PersonageType = GraphQL::ObjectType.define do
  name "PersonageField"
  field :id, !types.ID
  field :name, !types.String
  field :weight, !types.Int
  field :height, !types.Int
  field :image, !types.String
  field :types, !types.String
end
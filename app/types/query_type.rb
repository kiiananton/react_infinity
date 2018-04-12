QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :personage do
    type PersonageType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      id_started = args[:id]
      id_ended = id_started + 5
      Personage.where(id:(id_started..id_ended))
    }
  end
end
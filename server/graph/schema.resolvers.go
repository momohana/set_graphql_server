package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"apiserver/graph/generated"
	"apiserver/graph/model"
	"context"
)

func (r *mutationResolver) CreateCompany(ctx context.Context, input model.NewCompany) (*model.Company, error) {
	company := &model.Company{
		Comid:        input.Comid,
		Companyname:  input.Companyname,
		Companygroup: input.Companygroup,
		Comcode:      input.Comcode,
	}
	r.companys = append(r.companys, company)
	return company, nil
}

func (r *queryResolver) Companys(ctx context.Context) ([]*model.Company, error) {
	return r.companys, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

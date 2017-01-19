angular.module('conceptProposal').controller('conceptProposalControllerIndex',
    function conceptProposalController(sharedDropdownFactoryCore, conceptProposalServiceConcept) {
        conceptProposalServiceConcept.validate();
        // var regions = [
        //     'SIEA',
        //     'SIEE',
        //     'SIEJA'
        // ].map(function mapRegion(region) {
        //     return {
        //         name: region,
        //         value: conceptProposalServiceRegion.regions().indexOf(region) > -1
        //     };
        // });
        this.concept = conceptProposalServiceConcept;
        this.show = function (name) {
            return conceptProposalServiceConcept.field(name).visible();
        
        };

        // this.show = {};
        // conceptProposalServiceRegion.fields().map(function mapFields(field) {
        //     return field.name;
        // }).forEach(angular.bind(this, function forEachFieldName(fieldName) {
        //     this.show[fieldName] = function show(visible) {
        //         var field = conceptProposalServiceRegion.field(fieldName);
        //         if (visible) {
        //             field.visible = true;
        //         }
        //         return field.visible;
        //     };
        // }));

        // this.regions = function getRegions() { return regions; };
        // // Region is a map
        // // Update trigger runs the api call again

        // this.update = function update() {
        //     // Updates the region data for the API in line with the interface state.
        //     // It is updated with an array of region codes based on only regions which are
        //     // checked.
        //     conceptProposalServiceRegion.regions(regions.filter(function filter(region) {
        //         return region.value;
        //     }).map(function map(region) {
        //         return region.name;
        //     }));
        //     console.log('regions', conceptProposalServiceRegion.regions());
        // };

        this.franchise = sharedDropdownFactoryCore({
            franchise1: 'Franchise1',
            franchise2: 'Franchise2',
            franchise3: 'Franchise3',
            franchise4: 'Franchise4'
        }, {
            placeholder: 'Select a franchise'
        });

        //List Options for category general options
        var categoryGenreOptions = {
            superGenre1: {
                categoryGenre1: 'Category Genre 1a',
                categoryGenre2: 'Category Genre 1b',
                categoryGenre3: 'Category Genre 1c',
                categoryGenre4: 'Category Genre 1d'
            },
            superGenre2: {
                categoryGenre2: 'Category Genre 2a',
                categoryGenre3: 'Category Genre 2b',
                categoryGenre4: 'Category Genre 2c'
            },
            superGenre3: {
                categoryGenre2: 'Category Genre 3a',
                categoryGenre3: 'Category Genre 3b',
                categoryGenre4: 'Category Genre 3c'
            },
            superGenre4: {
                categoryGenre2: 'Category Genre 4a',
                categoryGenre3: 'Category Genre 4b',
                categoryGenre4: 'Category Genre 4c'
            }
        };

        // List for category
        this.categoryGenre = sharedDropdownFactoryCore({
            categoryGenre1: 'Category Genre 1',
            categoryGenre2: 'Category Genre 2',
            categoryGenre3: 'Category Genre 3',
            categoryGenre4: 'Category Genre 4'
        }, {
            placeholder: 'Select a category genre',
            disable: true
        });
        this.superGenre = sharedDropdownFactoryCore({
            superGenre1: 'Super Genre 1',
            superGenre2: 'Super Genre 2',
            superGenre3: 'Super Genre 3',
            superGenre4: 'Super Genre 4'
        }, {
            placeholder: 'Select a super genre',
            update: angular.bind(this, function (superGenreDropdown) {
                this.categoryGenre.disable(false);
                this.categoryGenre.list(categoryGenreOptions[superGenreDropdown.select().value]);
            })
        });

        this.age = sharedDropdownFactoryCore({
            addNew: 'Add New Target Age',
            targetage1: 'Option 1',
            targetage2: 'Option 2',
            targetage3: 'Option 3',
            targetage4: 'Option 4'
        }, {
            placeholder: 'Select an option'
        });
    });

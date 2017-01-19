angular.module('conceptProposal').service('conceptProposalServiceConcept',
function (conceptProposalServiceAPI, conceptProposalServiceField, sharedDataServiceConcept) {
    var role = '';
    var fields = [
        { name: 'concept.regions', label: 'Region', value: ['EU'] },
        { name: 'superGenre', label: 'Super Genre' },
        { name: 'categoryGenre', label: 'Category Genre' },
        { name: 'franchise', label: 'Franchise' },
        { name: 'nameEN', label: 'Concept Name EN' },
        { name: 'nameJA', label: 'Concept Name JA' },
        { name: 'codeNameEn', label: 'Code Name EN' },
        { name: 'codeNameJA', label: 'Code Name JA' },
        { name: 'type', label: 'Concept Type' },
        { name: 'partnerRoles', label: 'Other Publishers and Developers Involved', visible: true },
        { name: 'partner.name', label: 'Partner', visible: true },
        { name: 'partner.role', label: 'Role', visible: true },
        { name: 'proposal.platforms', label: 'Platforms' },
        { name: 'compliance.occComplianceComment', label: 'OCC' },
        { name: 'compliance.virtualCurrencyComplianceComment', label: 'Virtual Currency', visible: true },
    ].map(function (obj) {
        // Array of objects passed straight into creation function to be suitably transformed
        // into field objects.

        //******************* THIS 
        //*********************************IS
        //*******************************************A
        //****************************************************FLAG
        //**************************************************************ENABLING ALL FIELDS TO BE VISIBLE
         obj.visible = true;

        //******************* END
        //*****************************COMMENT 
        //**************************************OR
        //*************************************************UNCOMMENT
       
        return conceptProposalServiceField.create(obj.name, obj);
    });
    this.fetch = function () {
    }

    // Runs the validate endpoint on a concept.
    this.validate = angular.bind(this, function validate() {
        return conceptProposalServiceAPI.post('/sonycpocc/v2/sonycp/concepts/123/validate', sharedDataServiceConcept).then(angular.bind(this, function (response) {
            response.data.formFields.fields.forEach(angular.bind(this, function (fieldData) {
                var field = this.field(fieldData.fieldCode);
                field.visible(fieldData.visible);
                field.triggerUpdate(fieldData.triggerUpdate);
            }));
        }));
    });
    this.role = function (value) {
        if (value !== undefined) {
            if (typeof value !== 'string') {
                throw new Error([
                    'conceptProposalServiceConcept.role: Setting invalid role.',
                    'Expecting a string, got ' + (typeof value)
                ].join(''));
            }
            role = value;
        }
        return role;
    }

    // Returns a field given a field name
    this.field = function getField(name) {
        var list = fields.filter(function (field) {
            return field.name() === name;
        });
        if (list.length === 0) {
            // Creates field objects if they don't exist.
            list[0] = conceptProposalServiceField.create(name);
            fields.push(list[0]);
        }
        return list[0];
    }
});

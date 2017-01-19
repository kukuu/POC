angular.module('sharedData').factory('sharedDataServiceConcept',
function sharedDataServiceConcept() {
    /* eslint quote-props: [0, "always"]*/
    return {
        'className': 'Concept',
        'id': 123456,
        'nameEN': 'Metal Gear Solid V',
        'nameJA': 'abc',
        'codeNameEn': 'The Wolf 5',
        'codeNameJA': 'abc',
        'type': 'GAME',
        'status': 'DRAFT',
        'compliance': {
            'className': 'ConceptCompliance',
            'id': 123456,
            'legalDisclaimerAccepted': false,
            'occCompliance': 'YES',
            'occComplianceComment': '',
            'virtualCurrencyCompliance': 'YES',
            'virtualCurrencyComplianceComment': ''
        },
        'franchise': {
            'className': 'Franchise',
            'id': 123456,
            'name': 'My franchise',
            'partner': {
                'className': 'Partner',
                'id': 123456,
                'name': 'My partner'
            }
        },
        'superGenre': {
            'className': 'Genre',
            'id': 123456,
            'name': 'Genre one',
            'subGenre': {
                'className': 'Genre',
                'id': 123456,
                'name': 'Genre two'
            }
        },
        'categoryGenre': {
            'className': 'Genre',
            'id': 123456,
            'name': 'Genre one'
        },
        'partnerRoles': [
            {
                'className': 'PartnerConceptRole',
                'id': 123456,
                'partnerNameFreeText': 'My partner',
                'countries': [
                    {
                        'className': 'Country',
                        'id': 123456,
                        'isoCode': 'en_GB',
                        'defaultLanguage': {
                            'className': 'Language',
                            'isoCode': 'en_GB'
                        }
                    }
                ],
                'distributionChannels': ['DIGITAL'],
                'platforms': [
                    {
                        'className': 'Platform',
                        'id': 123456,
                        'name': 'Platform one',
                        'code': 'PS_4'
                    }
                ],
                'roles': ['PUBLISHER'],
                'partner': {
                    'className': 'Partner',
                    'id': 123456,
                    'name': 'My partner'
                },
                'status': 'ACTIVE'
            }
        ],
        'proposal': {
            'className': 'ConceptProposal',
            'id': 123456,
            'externalFeedbackRequired': false,
            'platforms': [
                {
                    'className': 'Platform',
                    'id': 123456,
                    'name': 'Platform one',
                    'code': 'PS_4'
                }
            ],
            'regions': [
                {
                    'className': 'Region',
                    'code': 'region_eu',
                    'name': 'EU'
                }
            ],
            'distributionChannels': ['DIGITAL'],
            'plannedPlatforms': [
                {
                    'className': 'ConceptPlannedPlatform',
                    'id': 123456,
                    'offlineMultiplayer': false,
                    'onlineMultiplayer': true,
                    'exclusiveAtLaunch': false,
                    'dlcIntension': '',
                    'exclusivityComment': '',
                    'platform': {
                        'className': 'Platform',
                        'id': 123456,
                        'name': 'Platform one',
                        'code': 'PS_4'
                    },
                    'plannedFeatures': [
                        {
                            'className': 'ConceptPlannedPlatformFeature',
                            'id': 123456,
                            'usagePlanned': true,
                            'feature': {
                                'className': 'PlatformFeature',
                                'id': 123456,
                                'nameEA': '',
                                'nameJA': '',
                                'guidanceTextEN': '',
                                'guidanceTextJA': '',
                                'active': true,
                                'platform': {
                                    'className': 'Platform',
                                    'id': 123456,
                                    'name': 'Platform one',
                                    'code': 'PS_4'
                                }
                            }
                        }
                    ],
                    'plannedPeripherals': [
                        {
                            'className': 'ConceptPlannedPlatformPeripheral',
                            'id': 123456,
                            'required': true,
                            'supportPlanned': true,
                            'peripheral': {
                                'className': 'PlatformPeripheral',
                                'id': 123456,
                                'nameEN': '',
                                'nameJA': '',
                                'platforms': [
                                    {
                                        'className': 'Platform',
                                        'id': 123456,
                                        'name': 'Platform one',
                                        'code': 'PS_4'
                                    }
                                ]
                            }
                        }
                    ],
                    'plannedRegions': [
                        {
                            'className': 'ConceptPlannedPlatformRegion',
                            'id': 123456,
                            'planned': false,
                            'actual': true,
                            'releaseDate': {
                                'className': 'ImperciseDate',
                                'id': 123456,
                                'date': '1985-04-12T23:20:50Z',
                                'quarterTime': {
                                    'className': 'QuarterTime',
                                    'year': 2016,
                                    'quarter': 'Q2'
                                }
                            },
                            'region': {
                                'className': 'Region',
                                'code': 'region_eu',
                                'name': 'EU'
                            }
                        }
                    ],
                    'plannedLanguages': [
                        {
                            'className': 'Language',
                            'isoCode': 'en_GB'
                        }
                    ],
                    'plannedMilestones': [
                        {
                            'className': 'ConceptPlannedPlatformMilestone',
                            'id': 123456,
                            'name': 'My milestone',
                            'date': '1985-04-12T23:20:50Z'
                        }
                    ],
                    'plannedDistibutionMedia': [
                        {
                            'className': 'DistributionMedium',
                            'id': 123456,
                            'name': 'My Medium'
                        }
                    ],
                    'businessModel': 'FREE_TO_PLAY'
                }
            ],
            'plannedCompetitorPlatforms': [
                {
                    'className': 'ConceptPlannedCompetitorPlatform',
                    'id': 123456,
                    'plannedCompetitorRegions': [
                        {
                            'className': 'ConceptPlannedCompetitorPlatformRegion',
                            'id': 123456,
                            'releaseDate': {
                                'className': 'ImperciseDate',
                                'id': 123456,
                                'date': '1985-04-12T23:20:50Z',
                                'quarterTime': {
                                    'className': 'QuarterTime',
                                    'year': 2016,
                                    'quarter': 'Q2'
                                }
                            },
                            'competitorRegion': {
                                'className': 'CompetitorPlatformRegion',
                                'id': 123456,
                                'name': 'ASIA'
                            }
                        }
                    ],
                    'competitorPlatform': {
                        'className': 'CompetitorPlatform',
                        'id': 123456,
                        'name': 'Xbox One'
                    }
                }
            ],
            'gameDesignDocuments': [
                {
                    'className': 'Document',
                    'id': 123456,
                    'uri': 'uri_to_media',
                    'extension': '',
                    'language': {
                        'className': 'Language',
                        'isoCode': 'en_GB'
                    }
                }
            ],
            'attachments': [
                {
                    'className': 'Document',
                    'id': 123456,
                    'uri': 'uri_to_media',
                    'extension': '',
                    'language': {
                        'className': 'Language',
                        'isoCode': 'en_GB'
                    }
                }
            ],
            'feedback': {
                'className': 'ConceptProposalFeedback',
                'id': 123456,
                'comment': 'Feedback comment',
                'rating': 'AVERAGE',
                'feedbackDocument': {
                    'className': 'Document',
                    'id': 123456,
                    'uri': 'uri_to_media',
                    'extension': '',
                    'language': {
                        'className': 'Language',
                        'isoCode': 'en_GB'
                    }
                }
            },
            'targetAge': '_16'
        },
        'version': 12
    };
    /* eslint quote-props: [2, "always"]*/
});

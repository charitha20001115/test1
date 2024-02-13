using MyService as service from '../../srv/service';

annotate service.mark_t with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'subject',
            Value : subject,
        },
        {
            $Type : 'UI.DataField',
            Label : 'pid',
            Value : pid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'sid',
            Value : sid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'marks',
            Value : marks,
        },
    ]
);
annotate service.mark_t with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'sid',
                Value : sid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'pid',
                Value : pid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'subject',
                Value : subject,
            },
            {
                $Type : 'UI.DataField',
                Label : 'marks',
                Value : marks,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);

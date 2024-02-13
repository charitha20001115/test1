const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    let {
        // attachments,
        // Dimension
        mark_t
    } = this.entities;

    const c5re = await cds.connect.to('iflow');
    var ab = true;
    if (ab = false){

    this.before('READ', mark_t, async (req) => {
        debugger
        try {

            const resp = await c5re.get('/odata/v4/my/mark_t');
            console.log(resp);

            let data = [];
            
            resp.value.forEach(da => {
               
            data.push({

                sid : da.sid,
                pid : da.pid,
                subject : da.subject,
                marks : da.marks,

            });
                
            });

            await DELETE.from(mark_t);  // error: already entity is there

            await INSERT.into(mark_t).entries(data); 

        } catch (error) {
            req.error(500, error.message);
        }
    });

 };
 
});


// this.on('POST', college, async (resp) => {
//     debugger
//     try {
//         body = {
//             collegeId: resp.data.collegeId,
//             collegeName: resp.data.collegeName,
//             collegeType: resp.data.collegeType,
//             collegeAddress: resp.data.collegeAddress
//         }
//         await INSERT.into(college).entries(resp.data);
//         await c5re.post('/odata/v4/my/collegeAnalytics', body);    //insert in api
//         return resp.data;
//     } catch (err) {
//         console.log(err);
//     }
// })

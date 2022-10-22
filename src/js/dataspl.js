$(document).ready(function(){
    var datasplJS = new dataJS();
    datasplJS.loadData()
})

class dataJS{
    constructor(){
    }

    loadData(){
        $.each(dataspl, function(index, item){
            var trHTML = $(`<tr>
                                <td> `+ item.khoangcach +`</td>
                                <td>`+ item.thoigianmaychay +`</td>
                                <td>`+ item.thoigianmaynghi +`</td>
                                <td>`+ item.soluongsanpham +`</td>
                            </tr>`);
            
            $('.table-hover tbody').append(trHTML);
        })
    }
}

var dataspl = [
    {
        khoangcach :"nội dung 1",
        thoigianmaychay:"nội dung 1",
        thoigianmaynghi:"nội dung 1",
        soluongsanpham:"nội dung 1",
    },
    {
        khoangcach :"nội dung 2",
        thoigianmaychay:"nội dung 2",
        thoigianmaynghi:"nội dung 2",
        soluongsanpham:"nội dung 2",
    },
    {
        khoangcach :"nội dung 3",
        thoigianmaychay:"nội dung 3",
        thoigianmaynghi:"nội dung 3",
        soluongsanpham:"nội dung 3", 
    },
    {
        khoangcach :"nội dung 4",
        thoigianmaychay:"nội dung 4",
        thoigianmaynghi:"nội dung 4",
        soluongsanpham:"nội dung 4",
    },
]

/* eslint-disable no-magic-numbers */
'use strict';

const BookRepository = require('../application/contracts/BookRepository');
// FIXME: change for .json file
const booksMock = [
  {
    bookId: 1,
    title: 'Stim',
    content:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    shortContent:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    publisher: 'Anya Hedan',
    publisherAt: '11/23/1984',
    pages: 1,
    language: 'Chinese',
    detailsUrl:
      'http://paginegialle.it/donec/posuere/metus/vitae/ipsum/aliquam.jsp?eget=scelerisque&orci=mauris&vehicula=sit&condimentum=amet&curabitur=eros&in=suspendisse&libero=accumsan&ut=tortor&massa=quis&volutpat=turpis&convallis=sed&morbi=ante&odio=vivamus&odio=tortor&elementum=duis&eu=mattis&interdum=egestas&eu=metus&tincidunt=aenean&in=fermentum&leo=donec&maecenas=ut&pulvinar=mauris&lobortis=eget&est=massa&phasellus=tempor&sit=convallis&amet=nulla&erat=neque&nulla=libero&tempus=convallis&vivamus=eget&in=eleifend&felis=luctus&eu=ultricies&sapien=eu&cursus=nibh&vestibulum=quisque&proin=id&eu=justo&mi=sit&nulla=amet&ac=sapien&enim=dignissim&in=vestibulum&tempor=vestibulum&turpis=ante&nec=ipsum&euismod=primis&scelerisque=in&quam=faucibus&turpis=orci&adipiscing=luctus&lorem=et&vitae=ultrices&mattis=posuere&nibh=cubilia&ligula=curae&nec=nulla&sem=dapibus&duis=dolor&aliquam=vel&convallis=est&nunc=donec&proin=odio&at=justo&turpis=sollicitudin&a=ut&pede=suscipit&posuere=a&nonummy=feugiat&integer=et&non=eros&velit=vestibulum&donec=ac&diam=est&neque=lacinia&vestibulum=nisi&eget=venenatis&vulputate=tristique&ut=fusce&ultrices=congue&vel=diam&augue=id&vestibulum=ornare&ante=imperdiet&ipsum=sapien&primis=urna&in=pretium&faucibus=nisl&orci=ut&luctus=volutpat&et=sapien',
    downloadUrl:
      'https://woothemes.com/tellus/in/sagittis/dui/vel/nisl.aspx?augue=massa&vestibulum=id&ante=lobortis&ipsum=convallis&primis=tortor&in=risus&faucibus=dapibus&orci=augue&luctus=vel&et=accumsan&ultrices=tellus&posuere=nisi&cubilia=eu&curae=orci&donec=mauris&pharetra=lacinia&magna=sapien&vestibulum=quis&aliquet=libero&ultrices=nullam&erat=sit&tortor=amet&sollicitudin=turpis&mi=elementum&sit=ligula&amet=vehicula&lobortis=consequat&sapien=morbi&sapien=a&non=ipsum&mi=integer&integer=a&ac=nibh&neque=in&duis=quis&bibendum=justo&morbi=maecenas&non=rhoncus&quam=aliquam&nec=lacus&dui=morbi&luctus=quis&rutrum=tortor',
    readOnlineUrl:
      'https://blog.com/lectus.html?habitasse=urna&platea=pretium&dictumst=nisl&etiam=ut&faucibus=volutpat&cursus=sapien&urna=arcu&ut=sed&tellus=augue&nulla=aliquam&ut=erat&erat=volutpat&id=in&mauris=congue&vulputate=etiam&elementum=justo&nullam=etiam&varius=pretium&nulla=iaculis&facilisi=justo&cras=in&non=hac&velit=habitasse&nec=platea&nisi=dictumst&vulputate=etiam&nonummy=faucibus&maecenas=cursus&tincidunt=urna&lacus=ut&at=tellus&velit=nulla&vivamus=ut&vel=erat&nulla=id&eget=mauris&eros=vulputate&elementum=elementum&pellentesque=nullam&quisque=varius&porta=nulla&volutpat=facilisi&erat=cras&quisque=non&erat=velit&eros=nec&viverra=nisi&eget=vulputate&congue=nonummy&eget=maecenas&semper=tincidunt&rutrum=lacus&nulla=at&nunc=velit&purus=vivamus&phasellus=vel&in=nulla&felis=eget&donec=eros&semper=elementum&sapien=pellentesque&a=quisque&libero=porta&nam=volutpat&dui=erat',
    coverUrl: 'http://dummyimage.com/215x203.bmp/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/243x221.png/dddddd/000000',
  },
  {
    bookId: 2,
    title: 'Cardguard',
    content:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    shortContent:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    publisher: 'Nona Hartill',
    publisherAt: '10/19/1992',
    pages: 2,
    language: 'Bulgarian',
    detailsUrl:
      'https://economist.com/sagittis/dui/vel/nisl/duis/ac.aspx?nulla=leo&neque=odio&libero=porttitor&convallis=id&eget=consequat&eleifend=in&luctus=consequat&ultricies=ut&eu=nulla&nibh=sed&quisque=accumsan&id=felis&justo=ut&sit=at&amet=dolor&sapien=quis&dignissim=odio&vestibulum=consequat&vestibulum=varius&ante=integer&ipsum=ac&primis=leo&in=pellentesque&faucibus=ultrices&orci=mattis&luctus=odio&et=donec&ultrices=vitae&posuere=nisi&cubilia=nam&curae=ultrices&nulla=libero&dapibus=non&dolor=mattis&vel=pulvinar&est=nulla&donec=pede&odio=ullamcorper&justo=augue&sollicitudin=a&ut=suscipit&suscipit=nulla&a=elit&feugiat=ac&et=nulla&eros=sed&vestibulum=vel&ac=enim&est=sit&lacinia=amet&nisi=nunc&venenatis=viverra&tristique=dapibus&fusce=nulla&congue=suscipit&diam=ligula&id=in&ornare=lacus&imperdiet=curabitur&sapien=at&urna=ipsum&pretium=ac&nisl=tellus&ut=semper&volutpat=interdum&sapien=mauris&arcu=ullamcorper&sed=purus&augue=sit&aliquam=amet&erat=nulla&volutpat=quisque&in=arcu',
    downloadUrl:
      'https://yahoo.com/quam/a/odio/in/hac/habitasse.aspx?lacinia=purus&sapien=aliquet&quis=at&libero=feugiat&nullam=non&sit=pretium&amet=quis&turpis=lectus&elementum=suspendisse&ligula=potenti&vehicula=in&consequat=eleifend&morbi=quam&a=a&ipsum=odio&integer=in&a=hac',
    readOnlineUrl:
      'https://dedecms.com/arcu/sed/augue.aspx?proin=nulla&leo=elit&odio=ac&porttitor=nulla&id=sed',
    coverUrl: 'http://dummyimage.com/197x118.bmp/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/246x205.jpg/ff4444/ffffff',
  },
  {
    bookId: 3,
    title: 'Flexidy',
    content:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    shortContent:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    publisher: 'Virgil Aronovitz',
    publisherAt: '6/6/1970',
    pages: 3,
    language: 'West Frisian',
    detailsUrl:
      'http://soup.io/eget.aspx?sed=pede&nisl=posuere&nunc=nonummy&rhoncus=integer&dui=non&vel=velit&sem=donec&sed=diam&sagittis=neque&nam=vestibulum&congue=eget&risus=vulputate&semper=ut&porta=ultrices&volutpat=vel&quam=augue&pede=vestibulum&lobortis=ante&ligula=ipsum&sit=primis&amet=in&eleifend=faucibus&pede=orci&libero=luctus&quis=et&orci=ultrices&nullam=posuere&molestie=cubilia&nibh=curae&in=donec&lectus=pharetra&pellentesque=magna&at=vestibulum&nulla=aliquet&suspendisse=ultrices&potenti=erat&cras=tortor&in=sollicitudin&purus=mi&eu=sit&magna=amet&vulputate=lobortis&luctus=sapien&cum=sapien&sociis=non&natoque=mi&penatibus=integer&et=ac&magnis=neque&dis=duis&parturient=bibendum&montes=morbi&nascetur=non&ridiculus=quam&mus=nec&vivamus=dui&vestibulum=luctus&sagittis=rutrum&sapien=nulla&cum=tellus&sociis=in&natoque=sagittis&penatibus=dui&et=vel&magnis=nisl&dis=duis&parturient=ac&montes=nibh',
    downloadUrl:
      'https://example.com/ultrices/posuere/cubilia/curae/nulla/dapibus.json?scelerisque=sapien&quam=in&turpis=sapien&adipiscing=iaculis&lorem=congue&vitae=vivamus&mattis=metus&nibh=arcu&ligula=adipiscing&nec=molestie&sem=hendrerit&duis=at&aliquam=vulputate&convallis=vitae&nunc=nisl&proin=aenean&at=lectus&turpis=pellentesque&a=eget&pede=nunc&posuere=donec&nonummy=quis&integer=orci&non=eget&velit=orci&donec=vehicula&diam=condimentum&neque=curabitur&vestibulum=in&eget=libero&vulputate=ut&ut=massa&ultrices=volutpat&vel=convallis&augue=morbi&vestibulum=odio&ante=odio&ipsum=elementum&primis=eu&in=interdum&faucibus=eu&orci=tincidunt&luctus=in&et=leo&ultrices=maecenas&posuere=pulvinar&cubilia=lobortis&curae=est&donec=phasellus&pharetra=sit&magna=amet&vestibulum=erat&aliquet=nulla&ultrices=tempus&erat=vivamus&tortor=in&sollicitudin=felis&mi=eu&sit=sapien&amet=cursus&lobortis=vestibulum&sapien=proin&sapien=eu&non=mi&mi=nulla&integer=ac&ac=enim&neque=in',
    readOnlineUrl:
      'http://free.fr/est/risus/auctor/sed/tristique.json?congue=rhoncus&diam=mauris&id=enim&ornare=leo&imperdiet=rhoncus&sapien=sed&urna=vestibulum&pretium=sit&nisl=amet&ut=cursus&volutpat=id&sapien=turpis&arcu=integer&sed=aliquet&augue=massa&aliquam=id',
    coverUrl: 'http://dummyimage.com/195x206.bmp/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/103x100.bmp/5fa2dd/ffffff',
  },
  {
    bookId: 4,
    title: 'Flowdesk',
    content:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    shortContent:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    publisher: 'Goober Rubinshtein',
    publisherAt: '7/26/1984',
    pages: 4,
    language: 'Indonesian',
    detailsUrl:
      'https://scientificamerican.com/in/congue/etiam/justo/etiam/pretium.aspx?nulla=dolor&pede=sit&ullamcorper=amet&augue=consectetuer&a=adipiscing&suscipit=elit&nulla=proin&elit=interdum&ac=mauris&nulla=non&sed=ligula&vel=pellentesque&enim=ultrices&sit=phasellus&amet=id&nunc=sapien&viverra=in&dapibus=sapien&nulla=iaculis&suscipit=congue&ligula=vivamus&in=metus&lacus=arcu&curabitur=adipiscing&at=molestie&ipsum=hendrerit&ac=at&tellus=vulputate&semper=vitae&interdum=nisl&mauris=aenean&ullamcorper=lectus&purus=pellentesque&sit=eget&amet=nunc&nulla=donec&quisque=quis&arcu=orci&libero=eget&rutrum=orci&ac=vehicula',
    downloadUrl:
      'http://gnu.org/est/donec/odio/justo/sollicitudin.aspx?et=nunc&eros=nisl&vestibulum=duis&ac=bibendum&est=felis&lacinia=sed&nisi=interdum&venenatis=venenatis&tristique=turpis&fusce=enim&congue=blandit&diam=mi&id=in&ornare=porttitor&imperdiet=pede&sapien=justo&urna=eu&pretium=massa&nisl=donec&ut=dapibus&volutpat=duis&sapien=at&arcu=velit&sed=eu&augue=est',
    readOnlineUrl:
      'https://qq.com/phasellus/id/sapien/in/sapien.jsp?magnis=commodo&dis=vulputate&parturient=justo&montes=in&nascetur=blandit&ridiculus=ultrices&mus=enim&vivamus=lorem&vestibulum=ipsum&sagittis=dolor&sapien=sit&cum=amet&sociis=consectetuer&natoque=adipiscing&penatibus=elit&et=proin&magnis=interdum&dis=mauris&parturient=non&montes=ligula&nascetur=pellentesque&ridiculus=ultrices&mus=phasellus&etiam=id&vel=sapien&augue=in&vestibulum=sapien&rutrum=iaculis&rutrum=congue&neque=vivamus&aenean=metus&auctor=arcu&gravida=adipiscing&sem=molestie&praesent=hendrerit&id=at&massa=vulputate&id=vitae&nisl=nisl&venenatis=aenean&lacinia=lectus&aenean=pellentesque&sit=eget&amet=nunc&justo=donec&morbi=quis&ut=orci&odio=eget&cras=orci&mi=vehicula&pede=condimentum&malesuada=curabitur&in=in&imperdiet=libero&et=ut&commodo=massa&vulputate=volutpat&justo=convallis&in=morbi&blandit=odio&ultrices=odio&enim=elementum&lorem=eu&ipsum=interdum&dolor=eu&sit=tincidunt&amet=in&consectetuer=leo&adipiscing=maecenas&elit=pulvinar&proin=lobortis&interdum=est&mauris=phasellus',
    coverUrl: 'http://dummyimage.com/212x185.jpg/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/126x213.bmp/5fa2dd/ffffff',
  },
  {
    bookId: 5,
    title: 'Rank',
    content:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    shortContent:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    publisher: 'Trent Sandells',
    publisherAt: '2/15/2001',
    pages: 5,
    language: 'Oriya',
    detailsUrl:
      'https://cafepress.com/pretium/nisl/ut/volutpat/sapien/arcu.jsp?arcu=sollicitudin&sed=mi&augue=sit&aliquam=amet&erat=lobortis&volutpat=sapien&in=sapien&congue=non&etiam=mi&justo=integer&etiam=ac&pretium=neque&iaculis=duis&justo=bibendum&in=morbi&hac=non&habitasse=quam&platea=nec&dictumst=dui&etiam=luctus&faucibus=rutrum&cursus=nulla&urna=tellus&ut=in&tellus=sagittis&nulla=dui&ut=vel&erat=nisl&id=duis&mauris=ac&vulputate=nibh&elementum=fusce&nullam=lacus&varius=purus&nulla=aliquet&facilisi=at&cras=feugiat&non=non&velit=pretium&nec=quis&nisi=lectus&vulputate=suspendisse&nonummy=potenti&maecenas=in&tincidunt=eleifend&lacus=quam&at=a&velit=odio&vivamus=in&vel=hac&nulla=habitasse&eget=platea&eros=dictumst&elementum=maecenas&pellentesque=ut&quisque=massa&porta=quis&volutpat=augue&erat=luctus&quisque=tincidunt&erat=nulla&eros=mollis&viverra=molestie&eget=lorem&congue=quisque&eget=ut&semper=erat&rutrum=curabitur&nulla=gravida&nunc=nisi&purus=at&phasellus=nibh&in=in&felis=hac&donec=habitasse&semper=platea&sapien=dictumst&a=aliquam&libero=augue&nam=quam&dui=sollicitudin&proin=vitae&leo=consectetuer&odio=eget&porttitor=rutrum&id=at&consequat=lorem&in=integer&consequat=tincidunt&ut=ante&nulla=vel&sed=ipsum&accumsan=praesent',
    downloadUrl:
      'http://state.gov/in/hac/habitasse.jsp?quam=justo&pharetra=etiam&magna=pretium&ac=iaculis&consequat=justo&metus=in&sapien=hac&ut=habitasse&nunc=platea&vestibulum=dictumst&ante=etiam&ipsum=faucibus&primis=cursus&in=urna&faucibus=ut&orci=tellus&luctus=nulla&et=ut&ultrices=erat&posuere=id&cubilia=mauris&curae=vulputate&mauris=elementum&viverra=nullam&diam=varius&vitae=nulla&quam=facilisi&suspendisse=cras&potenti=non&nullam=velit&porttitor=nec&lacus=nisi&at=vulputate&turpis=nonummy&donec=maecenas&posuere=tincidunt&metus=lacus&vitae=at&ipsum=velit&aliquam=vivamus&non=vel&mauris=nulla&morbi=eget&non=eros&lectus=elementum&aliquam=pellentesque&sit=quisque&amet=porta&diam=volutpat&in=erat&magna=quisque&bibendum=erat&imperdiet=eros&nullam=viverra&orci=eget&pede=congue&venenatis=eget&non=semper&sodales=rutrum&sed=nulla&tincidunt=nunc&eu=purus&felis=phasellus&fusce=in&posuere=felis&felis=donec&sed=semper&lacus=sapien&morbi=a&sem=libero&mauris=nam&laoreet=dui&ut=proin&rhoncus=leo&aliquet=odio&pulvinar=porttitor&sed=id&nisl=consequat&nunc=in&rhoncus=consequat&dui=ut&vel=nulla&sem=sed&sed=accumsan&sagittis=felis&nam=ut&congue=at&risus=dolor&semper=quis&porta=odio&volutpat=consequat&quam=varius&pede=integer&lobortis=ac&ligula=leo&sit=pellentesque&amet=ultrices',
    readOnlineUrl:
      'https://360.cn/varius/integer/ac.html?id=dolor&luctus=sit&nec=amet&molestie=consectetuer&sed=adipiscing&justo=elit&pellentesque=proin&viverra=risus&pede=praesent&ac=lectus&diam=vestibulum&cras=quam&pellentesque=sapien&volutpat=varius&dui=ut&maecenas=blandit&tristique=non&est=interdum&et=in&tempus=ante&semper=vestibulum&est=ante&quam=ipsum&pharetra=primis&magna=in&ac=faucibus&consequat=orci&metus=luctus&sapien=et&ut=ultrices&nunc=posuere&vestibulum=cubilia&ante=curae&ipsum=duis&primis=faucibus&in=accumsan&faucibus=odio&orci=curabitur&luctus=convallis&et=duis&ultrices=consequat&posuere=dui&cubilia=nec&curae=nisi&mauris=volutpat&viverra=eleifend&diam=donec&vitae=ut&quam=dolor&suspendisse=morbi&potenti=vel&nullam=lectus&porttitor=in&lacus=quam&at=fringilla&turpis=rhoncus&donec=mauris&posuere=enim&metus=leo&vitae=rhoncus&ipsum=sed&aliquam=vestibulum&non=sit&mauris=amet&morbi=cursus&non=id&lectus=turpis&aliquam=integer&sit=aliquet&amet=massa&diam=id&in=lobortis&magna=convallis&bibendum=tortor&imperdiet=risus&nullam=dapibus&orci=augue&pede=vel&venenatis=accumsan&non=tellus&sodales=nisi&sed=eu&tincidunt=orci&eu=mauris&felis=lacinia&fusce=sapien&posuere=quis&felis=libero&sed=nullam&lacus=sit&morbi=amet&sem=turpis&mauris=elementum&laoreet=ligula&ut=vehicula&rhoncus=consequat',
    coverUrl: 'http://dummyimage.com/130x110.bmp/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/234x111.png/dddddd/000000',
  },
  {
    bookId: 6,
    title: 'Andalax',
    content:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    shortContent:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    publisher: 'Kizzie Boutellier',
    publisherAt: '10/1/1990',
    pages: 6,
    language: 'Tswana',
    detailsUrl:
      'https://ucla.edu/nam/nulla/integer/pede/justo/lacinia/eget.json?vel=at&nulla=vulputate&eget=vitae&eros=nisl&elementum=aenean&pellentesque=lectus&quisque=pellentesque&porta=eget&volutpat=nunc&erat=donec&quisque=quis&erat=orci&eros=eget&viverra=orci&eget=vehicula&congue=condimentum&eget=curabitur&semper=in&rutrum=libero&nulla=ut&nunc=massa&purus=volutpat&phasellus=convallis&in=morbi&felis=odio&donec=odio&semper=elementum&sapien=eu',
    downloadUrl:
      'http://blinklist.com/ante/vestibulum/ante/ipsum/primis/in/faucibus.png?felis=quam&fusce=sollicitudin&posuere=vitae&felis=consectetuer&sed=eget&lacus=rutrum&morbi=at&sem=lorem&mauris=integer&laoreet=tincidunt&ut=ante&rhoncus=vel&aliquet=ipsum&pulvinar=praesent&sed=blandit&nisl=lacinia&nunc=erat&rhoncus=vestibulum&dui=sed&vel=magna&sem=at&sed=nunc&sagittis=commodo&nam=placerat&congue=praesent&risus=blandit&semper=nam&porta=nulla&volutpat=integer&quam=pede&pede=justo&lobortis=lacinia&ligula=eget&sit=tincidunt&amet=eget&eleifend=tempus&pede=vel&libero=pede&quis=morbi&orci=porttitor&nullam=lorem&molestie=id&nibh=ligula&in=suspendisse&lectus=ornare&pellentesque=consequat&at=lectus&nulla=in&suspendisse=est&potenti=risus&cras=auctor&in=sed&purus=tristique&eu=in&magna=tempus&vulputate=sit&luctus=amet&cum=sem&sociis=fusce&natoque=consequat&penatibus=nulla&et=nisl&magnis=nunc&dis=nisl&parturient=duis&montes=bibendum&nascetur=felis&ridiculus=sed&mus=interdum&vivamus=venenatis&vestibulum=turpis&sagittis=enim&sapien=blandit&cum=mi&sociis=in&natoque=porttitor&penatibus=pede&et=justo&magnis=eu&dis=massa&parturient=donec&montes=dapibus',
    readOnlineUrl:
      'https://nsw.gov.au/quisque/porta.js?ac=elementum&leo=in&pellentesque=hac&ultrices=habitasse&mattis=platea&odio=dictumst&donec=morbi&vitae=vestibulum&nisi=velit&nam=id&ultrices=pretium&libero=iaculis&non=diam&mattis=erat&pulvinar=fermentum&nulla=justo&pede=nec&ullamcorper=condimentum&augue=neque&a=sapien&suscipit=placerat&nulla=ante&elit=nulla&ac=justo',
    coverUrl: 'http://dummyimage.com/216x209.bmp/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/125x180.png/5fa2dd/ffffff',
  },
  {
    bookId: 7,
    title: 'It',
    content:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    shortContent:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    publisher: 'Alfonse Affleck',
    publisherAt: '2/15/1967',
    pages: 7,
    language: 'Swati',
    detailsUrl:
      'http://bing.com/quis.js?hac=volutpat&habitasse=erat&platea=quisque&dictumst=erat&morbi=eros&vestibulum=viverra&velit=eget&id=congue&pretium=eget&iaculis=semper&diam=rutrum&erat=nulla&fermentum=nunc&justo=purus&nec=phasellus&condimentum=in&neque=felis&sapien=donec&placerat=semper&ante=sapien&nulla=a&justo=libero&aliquam=nam&quis=dui&turpis=proin&eget=leo&elit=odio&sodales=porttitor&scelerisque=id&mauris=consequat&sit=in&amet=consequat&eros=ut&suspendisse=nulla&accumsan=sed&tortor=accumsan&quis=felis&turpis=ut&sed=at&ante=dolor&vivamus=quis&tortor=odio&duis=consequat&mattis=varius&egestas=integer&metus=ac&aenean=leo&fermentum=pellentesque',
    downloadUrl:
      'https://google.co.jp/libero/nullam/sit/amet/turpis.json?nullam=augue&porttitor=quam&lacus=sollicitudin&at=vitae&turpis=consectetuer&donec=eget&posuere=rutrum&metus=at&vitae=lorem&ipsum=integer&aliquam=tincidunt&non=ante&mauris=vel&morbi=ipsum&non=praesent&lectus=blandit&aliquam=lacinia&sit=erat&amet=vestibulum&diam=sed&in=magna&magna=at&bibendum=nunc&imperdiet=commodo&nullam=placerat&orci=praesent&pede=blandit&venenatis=nam&non=nulla&sodales=integer&sed=pede&tincidunt=justo&eu=lacinia&felis=eget&fusce=tincidunt&posuere=eget&felis=tempus&sed=vel&lacus=pede&morbi=morbi&sem=porttitor&mauris=lorem&laoreet=id&ut=ligula&rhoncus=suspendisse&aliquet=ornare&pulvinar=consequat&sed=lectus&nisl=in&nunc=est&rhoncus=risus&dui=auctor&vel=sed&sem=tristique&sed=in&sagittis=tempus&nam=sit&congue=amet&risus=sem&semper=fusce&porta=consequat&volutpat=nulla&quam=nisl&pede=nunc&lobortis=nisl&ligula=duis&sit=bibendum',
    readOnlineUrl:
      'http://blogger.com/venenatis/turpis/enim/blandit/mi/in/porttitor.png?erat=nisi&nulla=at&tempus=nibh&vivamus=in&in=hac&felis=habitasse&eu=platea&sapien=dictumst&cursus=aliquam&vestibulum=augue&proin=quam&eu=sollicitudin&mi=vitae&nulla=consectetuer&ac=eget&enim=rutrum&in=at&tempor=lorem&turpis=integer&nec=tincidunt&euismod=ante&scelerisque=vel&quam=ipsum&turpis=praesent&adipiscing=blandit&lorem=lacinia&vitae=erat&mattis=vestibulum&nibh=sed&ligula=magna&nec=at&sem=nunc&duis=commodo&aliquam=placerat&convallis=praesent&nunc=blandit&proin=nam&at=nulla&turpis=integer&a=pede',
    coverUrl: 'http://dummyimage.com/197x186.jpg/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/179x139.png/5fa2dd/ffffff',
  },
  {
    bookId: 8,
    title: 'Trippledex',
    content:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    shortContent:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    publisher: 'Bailie Junes',
    publisherAt: '8/3/2016',
    pages: 8,
    language: 'Persian',
    detailsUrl:
      'https://pcworld.com/mauris/enim.png?maecenas=in&tristique=tempus&est=sit&et=amet&tempus=sem&semper=fusce&est=consequat&quam=nulla',
    downloadUrl:
      'https://printfriendly.com/ligula.json?quam=vel&pharetra=ipsum&magna=praesent&ac=blandit&consequat=lacinia&metus=erat&sapien=vestibulum&ut=sed&nunc=magna&vestibulum=at&ante=nunc&ipsum=commodo&primis=placerat&in=praesent&faucibus=blandit&orci=nam&luctus=nulla&et=integer',
    readOnlineUrl:
      'https://epa.gov/volutpat.png?donec=maecenas&vitae=rhoncus&nisi=aliquam&nam=lacus&ultrices=morbi&libero=quis&non=tortor',
    coverUrl: 'http://dummyimage.com/218x164.jpg/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/215x245.bmp/5fa2dd/ffffff',
  },
  {
    bookId: 9,
    title: 'Mat Lam Tam',
    content:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    shortContent: 'Nunc purus.',
    publisher: 'Skippy Cheltnam',
    publisherAt: '10/12/1997',
    pages: 9,
    language: 'Assamese',
    detailsUrl:
      'http://etsy.com/eu/magna/vulputate.jpg?quisque=quam&porta=pharetra&volutpat=magna&erat=ac&quisque=consequat&erat=metus&eros=sapien&viverra=ut&eget=nunc&congue=vestibulum&eget=ante&semper=ipsum&rutrum=primis&nulla=in&nunc=faucibus&purus=orci&phasellus=luctus&in=et&felis=ultrices&donec=posuere&semper=cubilia&sapien=curae&a=mauris&libero=viverra&nam=diam&dui=vitae&proin=quam&leo=suspendisse&odio=potenti&porttitor=nullam&id=porttitor&consequat=lacus&in=at&consequat=turpis&ut=donec&nulla=posuere&sed=metus&accumsan=vitae&felis=ipsum&ut=aliquam&at=non&dolor=mauris&quis=morbi&odio=non&consequat=lectus&varius=aliquam&integer=sit&ac=amet&leo=diam&pellentesque=in&ultrices=magna&mattis=bibendum&odio=imperdiet&donec=nullam&vitae=orci&nisi=pede&nam=venenatis&ultrices=non&libero=sodales&non=sed&mattis=tincidunt&pulvinar=eu&nulla=felis&pede=fusce&ullamcorper=posuere&augue=felis&a=sed&suscipit=lacus&nulla=morbi&elit=sem&ac=mauris&nulla=laoreet&sed=ut&vel=rhoncus&enim=aliquet&sit=pulvinar&amet=sed&nunc=nisl&viverra=nunc&dapibus=rhoncus&nulla=dui&suscipit=vel&ligula=sem&in=sed&lacus=sagittis&curabitur=nam&at=congue&ipsum=risus&ac=semper&tellus=porta&semper=volutpat&interdum=quam&mauris=pede&ullamcorper=lobortis&purus=ligula&sit=sit&amet=amet&nulla=eleifend&quisque=pede',
    downloadUrl:
      'http://mail.ru/maecenas/tincidunt/lacus/at/velit.jsp?volutpat=aenean&convallis=sit&morbi=amet&odio=justo&odio=morbi&elementum=ut&eu=odio&interdum=cras&eu=mi&tincidunt=pede&in=malesuada&leo=in&maecenas=imperdiet&pulvinar=et&lobortis=commodo&est=vulputate&phasellus=justo&sit=in&amet=blandit&erat=ultrices&nulla=enim&tempus=lorem&vivamus=ipsum&in=dolor&felis=sit&eu=amet&sapien=consectetuer&cursus=adipiscing&vestibulum=elit&proin=proin&eu=interdum&mi=mauris&nulla=non&ac=ligula&enim=pellentesque&in=ultrices&tempor=phasellus&turpis=id&nec=sapien&euismod=in&scelerisque=sapien&quam=iaculis&turpis=congue&adipiscing=vivamus&lorem=metus&vitae=arcu&mattis=adipiscing&nibh=molestie&ligula=hendrerit&nec=at',
    readOnlineUrl:
      'https://exblog.jp/sit/amet/sem.jpg?sollicitudin=nulla&mi=suspendisse&sit=potenti&amet=cras&lobortis=in&sapien=purus&sapien=eu&non=magna&mi=vulputate&integer=luctus&ac=cum&neque=sociis&duis=natoque&bibendum=penatibus&morbi=et&non=magnis&quam=dis&nec=parturient&dui=montes&luctus=nascetur&rutrum=ridiculus&nulla=mus&tellus=vivamus&in=vestibulum&sagittis=sagittis&dui=sapien&vel=cum&nisl=sociis&duis=natoque&ac=penatibus&nibh=et&fusce=magnis&lacus=dis&purus=parturient&aliquet=montes&at=nascetur&feugiat=ridiculus&non=mus&pretium=etiam&quis=vel&lectus=augue&suspendisse=vestibulum&potenti=rutrum&in=rutrum&eleifend=neque&quam=aenean&a=auctor&odio=gravida&in=sem&hac=praesent&habitasse=id&platea=massa&dictumst=id&maecenas=nisl&ut=venenatis&massa=lacinia&quis=aenean&augue=sit&luctus=amet&tincidunt=justo&nulla=morbi&mollis=ut&molestie=odio&lorem=cras&quisque=mi&ut=pede&erat=malesuada&curabitur=in&gravida=imperdiet&nisi=et&at=commodo&nibh=vulputate&in=justo&hac=in&habitasse=blandit&platea=ultrices&dictumst=enim&aliquam=lorem',
    coverUrl: 'http://dummyimage.com/195x133.png/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/125x134.bmp/ff4444/ffffff',
  },
  {
    bookId: 10,
    title: 'Lotstring',
    content:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    shortContent:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    publisher: 'Kinna Hunnywell',
    publisherAt: '7/29/1926',
    pages: 10,
    language: 'Icelandic',
    detailsUrl:
      'https://cocolog-nifty.com/sed/sagittis/nam/congue/risus/semper/porta.json?molestie=pede&lorem=libero&quisque=quis&ut=orci&erat=nullam&curabitur=molestie&gravida=nibh&nisi=in&at=lectus&nibh=pellentesque&in=at&hac=nulla&habitasse=suspendisse&platea=potenti&dictumst=cras&aliquam=in&augue=purus&quam=eu&sollicitudin=magna&vitae=vulputate&consectetuer=luctus&eget=cum&rutrum=sociis&at=natoque&lorem=penatibus&integer=et&tincidunt=magnis&ante=dis&vel=parturient&ipsum=montes&praesent=nascetur&blandit=ridiculus&lacinia=mus&erat=vivamus&vestibulum=vestibulum&sed=sagittis&magna=sapien&at=cum&nunc=sociis&commodo=natoque&placerat=penatibus&praesent=et&blandit=magnis&nam=dis&nulla=parturient&integer=montes&pede=nascetur&justo=ridiculus&lacinia=mus&eget=etiam&tincidunt=vel&eget=augue&tempus=vestibulum&vel=rutrum&pede=rutrum&morbi=neque&porttitor=aenean&lorem=auctor&id=gravida&ligula=sem&suspendisse=praesent&ornare=id&consequat=massa&lectus=id&in=nisl&est=venenatis&risus=lacinia&auctor=aenean&sed=sit&tristique=amet',
    downloadUrl:
      'https://imgur.com/eu/felis/fusce/posuere/felis/sed.jpg?auctor=sit&gravida=amet&sem=eros&praesent=suspendisse&id=accumsan&massa=tortor&id=quis&nisl=turpis&venenatis=sed&lacinia=ante&aenean=vivamus&sit=tortor&amet=duis&justo=mattis&morbi=egestas&ut=metus&odio=aenean&cras=fermentum&mi=donec&pede=ut&malesuada=mauris&in=eget&imperdiet=massa&et=tempor&commodo=convallis&vulputate=nulla&justo=neque&in=libero&blandit=convallis&ultrices=eget&enim=eleifend&lorem=luctus&ipsum=ultricies&dolor=eu&sit=nibh&amet=quisque&consectetuer=id&adipiscing=justo&elit=sit&proin=amet&interdum=sapien&mauris=dignissim&non=vestibulum&ligula=vestibulum&pellentesque=ante&ultrices=ipsum&phasellus=primis&id=in&sapien=faucibus&in=orci&sapien=luctus&iaculis=et&congue=ultrices&vivamus=posuere&metus=cubilia&arcu=curae&adipiscing=nulla&molestie=dapibus&hendrerit=dolor&at=vel&vulputate=est&vitae=donec&nisl=odio&aenean=justo&lectus=sollicitudin&pellentesque=ut&eget=suscipit&nunc=a&donec=feugiat&quis=et&orci=eros&eget=vestibulum&orci=ac&vehicula=est&condimentum=lacinia&curabitur=nisi&in=venenatis&libero=tristique&ut=fusce&massa=congue&volutpat=diam&convallis=id',
    readOnlineUrl:
      'http://netlog.com/nullam/porttitor/lacus/at/turpis/donec/posuere.jsp?nisi=in&eu=hac&orci=habitasse&mauris=platea&lacinia=dictumst&sapien=etiam&quis=faucibus&libero=cursus&nullam=urna&sit=ut&amet=tellus&turpis=nulla&elementum=ut&ligula=erat&vehicula=id&consequat=mauris&morbi=vulputate&a=elementum&ipsum=nullam&integer=varius&a=nulla&nibh=facilisi&in=cras&quis=non&justo=velit&maecenas=nec&rhoncus=nisi&aliquam=vulputate&lacus=nonummy&morbi=maecenas&quis=tincidunt&tortor=lacus&id=at&nulla=velit&ultrices=vivamus&aliquet=vel&maecenas=nulla&leo=eget&odio=eros&condimentum=elementum&id=pellentesque&luctus=quisque&nec=porta&molestie=volutpat&sed=erat&justo=quisque&pellentesque=erat&viverra=eros&pede=viverra&ac=eget&diam=congue&cras=eget&pellentesque=semper&volutpat=rutrum&dui=nulla&maecenas=nunc&tristique=purus&est=phasellus&et=in&tempus=felis&semper=donec&est=semper&quam=sapien&pharetra=a&magna=libero&ac=nam&consequat=dui&metus=proin&sapien=leo&ut=odio&nunc=porttitor&vestibulum=id&ante=consequat&ipsum=in&primis=consequat&in=ut&faucibus=nulla&orci=sed&luctus=accumsan',
    coverUrl: 'http://dummyimage.com/187x165.bmp/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/208x192.jpg/dddddd/000000',
  },
  {
    bookId: 11,
    title: 'Redhold',
    content:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    shortContent:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    publisher: 'Bing Arpino',
    publisherAt: '2/5/1934',
    pages: 11,
    language: 'Māori',
    detailsUrl:
      'https://behance.net/pharetra.js?semper=a&sapien=pede&a=posuere&libero=nonummy&nam=integer&dui=non&proin=velit&leo=donec&odio=diam&porttitor=neque&id=vestibulum&consequat=eget&in=vulputate&consequat=ut&ut=ultrices&nulla=vel&sed=augue&accumsan=vestibulum&felis=ante&ut=ipsum&at=primis&dolor=in&quis=faucibus&odio=orci&consequat=luctus&varius=et&integer=ultrices&ac=posuere&leo=cubilia&pellentesque=curae&ultrices=donec&mattis=pharetra&odio=magna&donec=vestibulum&vitae=aliquet&nisi=ultrices&nam=erat&ultrices=tortor&libero=sollicitudin&non=mi&mattis=sit&pulvinar=amet&nulla=lobortis&pede=sapien&ullamcorper=sapien&augue=non&a=mi&suscipit=integer&nulla=ac&elit=neque&ac=duis&nulla=bibendum&sed=morbi&vel=non&enim=quam&sit=nec&amet=dui&nunc=luctus&viverra=rutrum&dapibus=nulla&nulla=tellus&suscipit=in&ligula=sagittis&in=dui',
    downloadUrl:
      'http://mit.edu/orci/mauris/lacinia/sapien.jsp?nulla=in&mollis=faucibus&molestie=orci&lorem=luctus&quisque=et&ut=ultrices&erat=posuere&curabitur=cubilia&gravida=curae&nisi=donec&at=pharetra&nibh=magna&in=vestibulum&hac=aliquet&habitasse=ultrices&platea=erat&dictumst=tortor&aliquam=sollicitudin&augue=mi&quam=sit&sollicitudin=amet',
    readOnlineUrl:
      'http://bloglines.com/lacinia/eget/tincidunt.png?nullam=leo&porttitor=rhoncus&lacus=sed&at=vestibulum&turpis=sit&donec=amet&posuere=cursus&metus=id&vitae=turpis&ipsum=integer&aliquam=aliquet&non=massa&mauris=id&morbi=lobortis&non=convallis&lectus=tortor&aliquam=risus&sit=dapibus&amet=augue&diam=vel&in=accumsan&magna=tellus&bibendum=nisi&imperdiet=eu&nullam=orci&orci=mauris&pede=lacinia&venenatis=sapien&non=quis&sodales=libero&sed=nullam&tincidunt=sit&eu=amet&felis=turpis&fusce=elementum&posuere=ligula&felis=vehicula&sed=consequat&lacus=morbi&morbi=a',
    coverUrl: 'http://dummyimage.com/150x207.png/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/148x217.bmp/dddddd/000000',
  },
  {
    bookId: 12,
    title: 'Zathin',
    content:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    shortContent:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    publisher: 'Vivian Blackah',
    publisherAt: '12/28/1953',
    pages: 12,
    language: 'Papiamento',
    detailsUrl:
      'http://theglobeandmail.com/viverra/eget/congue/eget/semper/rutrum/nulla.jpg?turpis=lorem&adipiscing=ipsum&lorem=dolor&vitae=sit&mattis=amet&nibh=consectetuer&ligula=adipiscing&nec=elit&sem=proin&duis=interdum&aliquam=mauris&convallis=non&nunc=ligula&proin=pellentesque&at=ultrices&turpis=phasellus&a=id&pede=sapien&posuere=in&nonummy=sapien&integer=iaculis',
    downloadUrl:
      'https://examiner.com/quis/libero/nullam/sit.jpg?ac=turpis&nibh=nec&fusce=euismod&lacus=scelerisque&purus=quam&aliquet=turpis&at=adipiscing&feugiat=lorem&non=vitae&pretium=mattis&quis=nibh&lectus=ligula&suspendisse=nec&potenti=sem&in=duis&eleifend=aliquam&quam=convallis&a=nunc&odio=proin&in=at&hac=turpis&habitasse=a&platea=pede&dictumst=posuere&maecenas=nonummy',
    readOnlineUrl:
      'http://reuters.com/ipsum/primis/in/faucibus/orci/luctus.html?mus=quam&etiam=turpis&vel=adipiscing&augue=lorem&vestibulum=vitae&rutrum=mattis&rutrum=nibh&neque=ligula&aenean=nec&auctor=sem&gravida=duis&sem=aliquam&praesent=convallis&id=nunc&massa=proin&id=at&nisl=turpis&venenatis=a&lacinia=pede&aenean=posuere&sit=nonummy',
    coverUrl: 'http://dummyimage.com/135x111.jpg/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/245x170.bmp/cc0000/ffffff',
  },
  {
    bookId: 13,
    title: 'Namfix',
    content:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    shortContent:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    publisher: 'Corina Brampton',
    publisherAt: '5/13/2009',
    pages: 13,
    language: 'Haitian Creole',
    detailsUrl:
      'http://zdnet.com/lectus/pellentesque.html?nullam=nam&sit=tristique&amet=tortor&turpis=eu',
    downloadUrl:
      'https://sina.com.cn/fusce.aspx?suspendisse=ut&accumsan=massa&tortor=volutpat&quis=convallis&turpis=morbi&sed=odio&ante=odio&vivamus=elementum&tortor=eu',
    readOnlineUrl:
      'http://fotki.com/aenean/auctor/gravida/sem/praesent/id/massa.json?quis=primis&tortor=in&id=faucibus&nulla=orci&ultrices=luctus&aliquet=et&maecenas=ultrices&leo=posuere&odio=cubilia&condimentum=curae&id=nulla&luctus=dapibus&nec=dolor&molestie=vel&sed=est&justo=donec&pellentesque=odio&viverra=justo&pede=sollicitudin&ac=ut&diam=suscipit&cras=a&pellentesque=feugiat&volutpat=et&dui=eros&maecenas=vestibulum&tristique=ac&est=est&et=lacinia&tempus=nisi&semper=venenatis&est=tristique&quam=fusce&pharetra=congue&magna=diam&ac=id&consequat=ornare&metus=imperdiet&sapien=sapien&ut=urna&nunc=pretium&vestibulum=nisl',
    coverUrl: 'http://dummyimage.com/149x131.png/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/180x212.png/5fa2dd/ffffff',
  },
  {
    bookId: 14,
    title: 'Bamity',
    content: 'Nulla tellus.',
    shortContent:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    publisher: 'Hamnet Esposito',
    publisherAt: '3/10/1956',
    pages: 14,
    language: 'Armenian',
    detailsUrl:
      'http://qq.com/cursus/urna/ut/tellus.html?vel=mauris&nulla=sit&eget=amet&eros=eros&elementum=suspendisse&pellentesque=accumsan&quisque=tortor&porta=quis&volutpat=turpis&erat=sed&quisque=ante&erat=vivamus&eros=tortor&viverra=duis&eget=mattis&congue=egestas&eget=metus&semper=aenean&rutrum=fermentum&nulla=donec&nunc=ut&purus=mauris&phasellus=eget&in=massa&felis=tempor&donec=convallis&semper=nulla&sapien=neque&a=libero&libero=convallis',
    downloadUrl:
      'https://xrea.com/interdum.json?lacinia=eu&erat=felis&vestibulum=fusce&sed=posuere',
    readOnlineUrl:
      'http://weather.com/ipsum/dolor/sit/amet/consectetuer.png?vel=vestibulum&nisl=ante&duis=ipsum&ac=primis&nibh=in&fusce=faucibus&lacus=orci&purus=luctus&aliquet=et&at=ultrices&feugiat=posuere&non=cubilia&pretium=curae&quis=nulla&lectus=dapibus&suspendisse=dolor&potenti=vel&in=est&eleifend=donec&quam=odio',
    coverUrl: 'http://dummyimage.com/111x149.bmp/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/202x203.jpg/dddddd/000000',
  },
  {
    bookId: 15,
    title: 'Bamity',
    content:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    shortContent:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    publisher: 'Karlik Digance',
    publisherAt: '8/27/2006',
    pages: 15,
    language: 'Bosnian',
    detailsUrl:
      'http://newyorker.com/sagittis/nam/congue/risus/semper/porta.html?tortor=nisl&risus=duis&dapibus=ac&augue=nibh&vel=fusce&accumsan=lacus&tellus=purus&nisi=aliquet&eu=at&orci=feugiat&mauris=non&lacinia=pretium&sapien=quis&quis=lectus&libero=suspendisse&nullam=potenti&sit=in&amet=eleifend&turpis=quam&elementum=a&ligula=odio&vehicula=in&consequat=hac&morbi=habitasse&a=platea&ipsum=dictumst&integer=maecenas&a=ut&nibh=massa&in=quis&quis=augue&justo=luctus&maecenas=tincidunt&rhoncus=nulla&aliquam=mollis&lacus=molestie&morbi=lorem&quis=quisque&tortor=ut&id=erat&nulla=curabitur&ultrices=gravida&aliquet=nisi&maecenas=at&leo=nibh&odio=in&condimentum=hac&id=habitasse&luctus=platea&nec=dictumst&molestie=aliquam&sed=augue&justo=quam&pellentesque=sollicitudin&viverra=vitae&pede=consectetuer&ac=eget&diam=rutrum&cras=at&pellentesque=lorem&volutpat=integer&dui=tincidunt&maecenas=ante&tristique=vel&est=ipsum&et=praesent&tempus=blandit&semper=lacinia&est=erat&quam=vestibulum&pharetra=sed&magna=magna&ac=at&consequat=nunc&metus=commodo&sapien=placerat&ut=praesent&nunc=blandit&vestibulum=nam&ante=nulla',
    downloadUrl:
      'http://tinyurl.com/lacinia/nisi/venenatis/tristique/fusce.aspx?volutpat=morbi&erat=vestibulum&quisque=velit&erat=id&eros=pretium&viverra=iaculis&eget=diam&congue=erat&eget=fermentum&semper=justo&rutrum=nec&nulla=condimentum&nunc=neque&purus=sapien&phasellus=placerat&in=ante&felis=nulla&donec=justo&semper=aliquam&sapien=quis&a=turpis&libero=eget&nam=elit&dui=sodales&proin=scelerisque&leo=mauris&odio=sit&porttitor=amet&id=eros&consequat=suspendisse&in=accumsan&consequat=tortor&ut=quis&nulla=turpis&sed=sed&accumsan=ante&felis=vivamus&ut=tortor&at=duis&dolor=mattis&quis=egestas&odio=metus&consequat=aenean&varius=fermentum&integer=donec&ac=ut&leo=mauris&pellentesque=eget&ultrices=massa&mattis=tempor&odio=convallis&donec=nulla&vitae=neque&nisi=libero&nam=convallis&ultrices=eget&libero=eleifend&non=luctus&mattis=ultricies&pulvinar=eu&nulla=nibh&pede=quisque&ullamcorper=id&augue=justo&a=sit&suscipit=amet&nulla=sapien&elit=dignissim&ac=vestibulum&nulla=vestibulum&sed=ante&vel=ipsum&enim=primis&sit=in&amet=faucibus&nunc=orci&viverra=luctus&dapibus=et&nulla=ultrices&suscipit=posuere&ligula=cubilia',
    readOnlineUrl:
      'http://yandex.ru/metus/vitae.xml?fusce=nunc&posuere=purus&felis=phasellus&sed=in&lacus=felis&morbi=donec&sem=semper&mauris=sapien&laoreet=a&ut=libero&rhoncus=nam&aliquet=dui&pulvinar=proin&sed=leo&nisl=odio&nunc=porttitor&rhoncus=id&dui=consequat&vel=in&sem=consequat&sed=ut&sagittis=nulla&nam=sed&congue=accumsan&risus=felis&semper=ut&porta=at&volutpat=dolor&quam=quis&pede=odio&lobortis=consequat&ligula=varius&sit=integer&amet=ac&eleifend=leo&pede=pellentesque&libero=ultrices&quis=mattis&orci=odio&nullam=donec&molestie=vitae&nibh=nisi&in=nam&lectus=ultrices&pellentesque=libero&at=non&nulla=mattis&suspendisse=pulvinar&potenti=nulla&cras=pede&in=ullamcorper&purus=augue&eu=a&magna=suscipit&vulputate=nulla&luctus=elit&cum=ac&sociis=nulla&natoque=sed&penatibus=vel&et=enim&magnis=sit&dis=amet&parturient=nunc',
    coverUrl: 'http://dummyimage.com/226x204.jpg/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/111x183.bmp/dddddd/000000',
  },
  {
    bookId: 16,
    title: 'Tres-Zap',
    content:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    shortContent:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    publisher: 'Gina Wardel',
    publisherAt: '10/15/1984',
    pages: 16,
    language: 'French',
    detailsUrl:
      'http://theglobeandmail.com/cursus/id/turpis/integer/aliquet/massa.aspx?commodo=semper&vulputate=rutrum&justo=nulla&in=nunc&blandit=purus&ultrices=phasellus&enim=in&lorem=felis&ipsum=donec&dolor=semper&sit=sapien&amet=a&consectetuer=libero&adipiscing=nam&elit=dui&proin=proin&interdum=leo&mauris=odio&non=porttitor&ligula=id&pellentesque=consequat',
    downloadUrl:
      'http://cargocollective.com/nec/molestie/sed/justo/pellentesque/viverra/pede.png?platea=erat&dictumst=curabitur&maecenas=gravida&ut=nisi&massa=at&quis=nibh&augue=in&luctus=hac&tincidunt=habitasse&nulla=platea&mollis=dictumst&molestie=aliquam&lorem=augue&quisque=quam&ut=sollicitudin&erat=vitae&curabitur=consectetuer&gravida=eget&nisi=rutrum&at=at&nibh=lorem',
    readOnlineUrl:
      'https://blogspot.com/dui/nec.png?a=phasellus&libero=id&nam=sapien&dui=in&proin=sapien&leo=iaculis&odio=congue&porttitor=vivamus&id=metus&consequat=arcu&in=adipiscing&consequat=molestie&ut=hendrerit&nulla=at&sed=vulputate&accumsan=vitae&felis=nisl&ut=aenean&at=lectus&dolor=pellentesque&quis=eget&odio=nunc&consequat=donec&varius=quis&integer=orci&ac=eget&leo=orci&pellentesque=vehicula&ultrices=condimentum&mattis=curabitur&odio=in&donec=libero&vitae=ut&nisi=massa&nam=volutpat&ultrices=convallis&libero=morbi&non=odio&mattis=odio&pulvinar=elementum&nulla=eu&pede=interdum&ullamcorper=eu&augue=tincidunt&a=in&suscipit=leo&nulla=maecenas&elit=pulvinar&ac=lobortis&nulla=est&sed=phasellus&vel=sit&enim=amet&sit=erat&amet=nulla&nunc=tempus&viverra=vivamus&dapibus=in&nulla=felis&suscipit=eu&ligula=sapien&in=cursus&lacus=vestibulum&curabitur=proin&at=eu&ipsum=mi&ac=nulla&tellus=ac&semper=enim&interdum=in&mauris=tempor&ullamcorper=turpis&purus=nec&sit=euismod&amet=scelerisque&nulla=quam&quisque=turpis&arcu=adipiscing&libero=lorem&rutrum=vitae&ac=mattis&lobortis=nibh&vel=ligula&dapibus=nec&at=sem&diam=duis&nam=aliquam&tristique=convallis&tortor=nunc&eu=proin',
    coverUrl: 'http://dummyimage.com/245x215.png/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/242x220.png/5fa2dd/ffffff',
  },
  {
    bookId: 17,
    title: 'Fixflex',
    content: 'Integer ac leo.',
    shortContent:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    publisher: 'Wayland Alp',
    publisherAt: '4/9/2013',
    pages: 17,
    language: 'Spanish',
    detailsUrl:
      'http://mit.edu/convallis.jpg?in=purus&ante=phasellus&vestibulum=in&ante=felis&ipsum=donec&primis=semper&in=sapien&faucibus=a&orci=libero&luctus=nam&et=dui&ultrices=proin&posuere=leo&cubilia=odio&curae=porttitor&duis=id&faucibus=consequat&accumsan=in&odio=consequat&curabitur=ut&convallis=nulla&duis=sed&consequat=accumsan&dui=felis&nec=ut&nisi=at&volutpat=dolor&eleifend=quis&donec=odio&ut=consequat&dolor=varius&morbi=integer&vel=ac',
    downloadUrl:
      'http://wired.com/amet.json?donec=cubilia&quis=curae&orci=mauris&eget=viverra&orci=diam&vehicula=vitae&condimentum=quam&curabitur=suspendisse&in=potenti&libero=nullam&ut=porttitor&massa=lacus&volutpat=at&convallis=turpis&morbi=donec&odio=posuere&odio=metus&elementum=vitae&eu=ipsum&interdum=aliquam&eu=non&tincidunt=mauris&in=morbi&leo=non&maecenas=lectus&pulvinar=aliquam',
    readOnlineUrl:
      'https://smugmug.com/ac/enim/in/tempor/turpis.html?nec=justo&nisi=sollicitudin&vulputate=ut&nonummy=suscipit&maecenas=a&tincidunt=feugiat&lacus=et&at=eros&velit=vestibulum&vivamus=ac&vel=est&nulla=lacinia&eget=nisi&eros=venenatis&elementum=tristique&pellentesque=fusce&quisque=congue&porta=diam&volutpat=id&erat=ornare&quisque=imperdiet&erat=sapien&eros=urna&viverra=pretium&eget=nisl&congue=ut&eget=volutpat&semper=sapien&rutrum=arcu&nulla=sed&nunc=augue&purus=aliquam&phasellus=erat&in=volutpat&felis=in&donec=congue&semper=etiam&sapien=justo&a=etiam&libero=pretium&nam=iaculis&dui=justo&proin=in&leo=hac&odio=habitasse&porttitor=platea&id=dictumst&consequat=etiam&in=faucibus&consequat=cursus&ut=urna&nulla=ut&sed=tellus&accumsan=nulla&felis=ut&ut=erat&at=id&dolor=mauris&quis=vulputate&odio=elementum&consequat=nullam&varius=varius&integer=nulla&ac=facilisi&leo=cras&pellentesque=non&ultrices=velit&mattis=nec&odio=nisi&donec=vulputate&vitae=nonummy&nisi=maecenas&nam=tincidunt&ultrices=lacus&libero=at&non=velit&mattis=vivamus&pulvinar=vel&nulla=nulla&pede=eget&ullamcorper=eros&augue=elementum&a=pellentesque&suscipit=quisque',
    coverUrl: 'http://dummyimage.com/229x246.png/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/174x231.bmp/5fa2dd/ffffff',
  },
  {
    bookId: 18,
    title: 'Bytecard',
    content:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    shortContent:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    publisher: 'Jessica Ellerbeck',
    publisherAt: '4/11/1987',
    pages: 18,
    language: 'French',
    detailsUrl:
      'https://oakley.com/suscipit.aspx?nisl=dis&nunc=parturient&rhoncus=montes&dui=nascetur&vel=ridiculus&sem=mus&sed=vivamus&sagittis=vestibulum&nam=sagittis&congue=sapien&risus=cum&semper=sociis&porta=natoque&volutpat=penatibus&quam=et&pede=magnis&lobortis=dis&ligula=parturient&sit=montes&amet=nascetur&eleifend=ridiculus&pede=mus&libero=etiam&quis=vel&orci=augue&nullam=vestibulum&molestie=rutrum&nibh=rutrum&in=neque&lectus=aenean&pellentesque=auctor&at=gravida&nulla=sem&suspendisse=praesent&potenti=id&cras=massa&in=id&purus=nisl&eu=venenatis&magna=lacinia&vulputate=aenean&luctus=sit',
    downloadUrl:
      'https://photobucket.com/adipiscing/elit/proin/risus.html?felis=sed&donec=interdum&semper=venenatis&sapien=turpis&a=enim&libero=blandit&nam=mi&dui=in',
    readOnlineUrl:
      'https://upenn.edu/eget/semper/rutrum/nulla.html?consequat=donec&nulla=pharetra&nisl=magna&nunc=vestibulum&nisl=aliquet&duis=ultrices&bibendum=erat&felis=tortor&sed=sollicitudin&interdum=mi&venenatis=sit&turpis=amet&enim=lobortis&blandit=sapien&mi=sapien&in=non&porttitor=mi&pede=integer&justo=ac&eu=neque&massa=duis&donec=bibendum&dapibus=morbi&duis=non&at=quam&velit=nec&eu=dui&est=luctus&congue=rutrum&elementum=nulla&in=tellus&hac=in&habitasse=sagittis&platea=dui&dictumst=vel&morbi=nisl&vestibulum=duis&velit=ac&id=nibh&pretium=fusce&iaculis=lacus&diam=purus&erat=aliquet&fermentum=at&justo=feugiat&nec=non&condimentum=pretium&neque=quis&sapien=lectus&placerat=suspendisse&ante=potenti&nulla=in&justo=eleifend&aliquam=quam&quis=a&turpis=odio&eget=in&elit=hac&sodales=habitasse&scelerisque=platea&mauris=dictumst&sit=maecenas&amet=ut&eros=massa&suspendisse=quis&accumsan=augue&tortor=luctus&quis=tincidunt&turpis=nulla&sed=mollis&ante=molestie&vivamus=lorem&tortor=quisque&duis=ut&mattis=erat&egestas=curabitur&metus=gravida&aenean=nisi&fermentum=at&donec=nibh&ut=in&mauris=hac&eget=habitasse&massa=platea&tempor=dictumst&convallis=aliquam&nulla=augue&neque=quam&libero=sollicitudin&convallis=vitae&eget=consectetuer&eleifend=eget&luctus=rutrum&ultricies=at&eu=lorem&nibh=integer&quisque=tincidunt&id=ante',
    coverUrl: 'http://dummyimage.com/112x223.jpg/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/189x202.bmp/ff4444/ffffff',
  },
  {
    bookId: 19,
    title: 'Voltsillam',
    content:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    shortContent:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    publisher: 'Cobby Seager',
    publisherAt: '7/29/2004',
    pages: 19,
    language: 'Portuguese',
    detailsUrl:
      'https://bravesites.com/augue/quam/sollicitudin.xml?a=sapien&ipsum=quis&integer=libero&a=nullam&nibh=sit&in=amet&quis=turpis&justo=elementum&maecenas=ligula&rhoncus=vehicula&aliquam=consequat&lacus=morbi&morbi=a&quis=ipsum&tortor=integer&id=a&nulla=nibh&ultrices=in&aliquet=quis&maecenas=justo&leo=maecenas&odio=rhoncus&condimentum=aliquam&id=lacus&luctus=morbi&nec=quis&molestie=tortor&sed=id&justo=nulla&pellentesque=ultrices&viverra=aliquet&pede=maecenas&ac=leo&diam=odio&cras=condimentum&pellentesque=id&volutpat=luctus&dui=nec&maecenas=molestie&tristique=sed&est=justo&et=pellentesque&tempus=viverra&semper=pede&est=ac&quam=diam&pharetra=cras&magna=pellentesque&ac=volutpat&consequat=dui&metus=maecenas&sapien=tristique&ut=est&nunc=et&vestibulum=tempus',
    downloadUrl:
      'http://jimdo.com/pede/lobortis/ligula/sit/amet/eleifend.jpg?suscipit=facilisi&nulla=cras&elit=non&ac=velit&nulla=nec&sed=nisi&vel=vulputate&enim=nonummy&sit=maecenas&amet=tincidunt&nunc=lacus&viverra=at&dapibus=velit&nulla=vivamus&suscipit=vel&ligula=nulla&in=eget&lacus=eros&curabitur=elementum&at=pellentesque&ipsum=quisque&ac=porta&tellus=volutpat&semper=erat&interdum=quisque&mauris=erat&ullamcorper=eros&purus=viverra&sit=eget&amet=congue&nulla=eget&quisque=semper&arcu=rutrum&libero=nulla&rutrum=nunc&ac=purus&lobortis=phasellus&vel=in&dapibus=felis&at=donec&diam=semper&nam=sapien&tristique=a&tortor=libero',
    readOnlineUrl:
      'http://yandex.ru/bibendum/imperdiet/nullam.xml?quis=dolor&lectus=sit&suspendisse=amet&potenti=consectetuer&in=adipiscing&eleifend=elit&quam=proin&a=interdum&odio=mauris&in=non&hac=ligula&habitasse=pellentesque&platea=ultrices&dictumst=phasellus&maecenas=id&ut=sapien&massa=in&quis=sapien&augue=iaculis&luctus=congue&tincidunt=vivamus&nulla=metus&mollis=arcu&molestie=adipiscing&lorem=molestie&quisque=hendrerit&ut=at&erat=vulputate&curabitur=vitae&gravida=nisl&nisi=aenean&at=lectus&nibh=pellentesque&in=eget&hac=nunc&habitasse=donec&platea=quis&dictumst=orci&aliquam=eget&augue=orci&quam=vehicula&sollicitudin=condimentum&vitae=curabitur&consectetuer=in&eget=libero&rutrum=ut&at=massa&lorem=volutpat&integer=convallis&tincidunt=morbi&ante=odio&vel=odio&ipsum=elementum&praesent=eu&blandit=interdum&lacinia=eu&erat=tincidunt&vestibulum=in&sed=leo&magna=maecenas&at=pulvinar&nunc=lobortis&commodo=est&placerat=phasellus&praesent=sit&blandit=amet&nam=erat&nulla=nulla&integer=tempus&pede=vivamus&justo=in&lacinia=felis&eget=eu&tincidunt=sapien&eget=cursus&tempus=vestibulum&vel=proin&pede=eu&morbi=mi&porttitor=nulla&lorem=ac',
    coverUrl: 'http://dummyimage.com/113x119.bmp/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/146x111.bmp/dddddd/000000',
  },
  {
    bookId: 20,
    title: 'Hatity',
    content:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    shortContent:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    publisher: 'Maisey Beyer',
    publisherAt: '9/10/1945',
    pages: 20,
    language: 'Zulu',
    detailsUrl:
      'http://myspace.com/morbi/porttitor/lorem/id.html?semper=eget&est=semper&quam=rutrum&pharetra=nulla&magna=nunc&ac=purus&consequat=phasellus&metus=in&sapien=felis&ut=donec&nunc=semper&vestibulum=sapien&ante=a&ipsum=libero&primis=nam&in=dui&faucibus=proin&orci=leo&luctus=odio&et=porttitor&ultrices=id&posuere=consequat&cubilia=in&curae=consequat&mauris=ut&viverra=nulla&diam=sed&vitae=accumsan&quam=felis&suspendisse=ut&potenti=at&nullam=dolor&porttitor=quis&lacus=odio&at=consequat&turpis=varius&donec=integer&posuere=ac&metus=leo&vitae=pellentesque&ipsum=ultrices&aliquam=mattis&non=odio&mauris=donec&morbi=vitae&non=nisi&lectus=nam&aliquam=ultrices&sit=libero&amet=non&diam=mattis&in=pulvinar&magna=nulla&bibendum=pede&imperdiet=ullamcorper&nullam=augue&orci=a&pede=suscipit&venenatis=nulla&non=elit&sodales=ac&sed=nulla&tincidunt=sed&eu=vel&felis=enim&fusce=sit&posuere=amet&felis=nunc&sed=viverra&lacus=dapibus&morbi=nulla&sem=suscipit&mauris=ligula&laoreet=in&ut=lacus&rhoncus=curabitur&aliquet=at&pulvinar=ipsum&sed=ac&nisl=tellus&nunc=semper&rhoncus=interdum&dui=mauris&vel=ullamcorper&sem=purus&sed=sit&sagittis=amet&nam=nulla',
    downloadUrl:
      'https://ow.ly/volutpat.jpg?lorem=condimentum&id=neque&ligula=sapien&suspendisse=placerat&ornare=ante&consequat=nulla&lectus=justo&in=aliquam&est=quis&risus=turpis&auctor=eget&sed=elit&tristique=sodales&in=scelerisque&tempus=mauris&sit=sit&amet=amet&sem=eros&fusce=suspendisse&consequat=accumsan&nulla=tortor&nisl=quis&nunc=turpis&nisl=sed&duis=ante&bibendum=vivamus&felis=tortor&sed=duis&interdum=mattis&venenatis=egestas&turpis=metus&enim=aenean&blandit=fermentum&mi=donec&in=ut&porttitor=mauris&pede=eget&justo=massa&eu=tempor&massa=convallis&donec=nulla&dapibus=neque&duis=libero&at=convallis&velit=eget&eu=eleifend&est=luctus&congue=ultricies&elementum=eu&in=nibh&hac=quisque&habitasse=id&platea=justo&dictumst=sit&morbi=amet&vestibulum=sapien&velit=dignissim&id=vestibulum&pretium=vestibulum&iaculis=ante&diam=ipsum&erat=primis&fermentum=in&justo=faucibus&nec=orci&condimentum=luctus&neque=et&sapien=ultrices&placerat=posuere&ante=cubilia&nulla=curae&justo=nulla&aliquam=dapibus&quis=dolor&turpis=vel&eget=est&elit=donec',
    readOnlineUrl:
      'https://reference.com/aenean.png?nibh=scelerisque&ligula=quam&nec=turpis&sem=adipiscing&duis=lorem&aliquam=vitae&convallis=mattis&nunc=nibh&proin=ligula&at=nec&turpis=sem&a=duis&pede=aliquam&posuere=convallis&nonummy=nunc&integer=proin&non=at&velit=turpis&donec=a&diam=pede&neque=posuere&vestibulum=nonummy&eget=integer&vulputate=non&ut=velit&ultrices=donec&vel=diam&augue=neque&vestibulum=vestibulum&ante=eget&ipsum=vulputate&primis=ut&in=ultrices&faucibus=vel&orci=augue&luctus=vestibulum&et=ante&ultrices=ipsum&posuere=primis&cubilia=in&curae=faucibus&donec=orci&pharetra=luctus&magna=et&vestibulum=ultrices&aliquet=posuere&ultrices=cubilia&erat=curae&tortor=donec&sollicitudin=pharetra&mi=magna&sit=vestibulum&amet=aliquet&lobortis=ultrices&sapien=erat&sapien=tortor&non=sollicitudin&mi=mi&integer=sit&ac=amet&neque=lobortis&duis=sapien&bibendum=sapien&morbi=non&non=mi&quam=integer&nec=ac&dui=neque&luctus=duis&rutrum=bibendum&nulla=morbi&tellus=non&in=quam&sagittis=nec&dui=dui&vel=luctus&nisl=rutrum&duis=nulla&ac=tellus&nibh=in&fusce=sagittis&lacus=dui&purus=vel&aliquet=nisl&at=duis&feugiat=ac&non=nibh&pretium=fusce&quis=lacus&lectus=purus',
    coverUrl: 'http://dummyimage.com/122x151.png/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/103x133.bmp/dddddd/000000',
  },
  {
    bookId: 21,
    title: 'Alphazap',
    content:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    shortContent:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    publisher: 'Damita Brennan',
    publisherAt: '2/25/1947',
    pages: 21,
    language: 'Latvian',
    detailsUrl:
      'http://shop-pro.jp/lobortis.png?ac=sed&diam=sagittis&cras=nam&pellentesque=congue&volutpat=risus&dui=semper&maecenas=porta&tristique=volutpat&est=quam&et=pede&tempus=lobortis&semper=ligula&est=sit&quam=amet&pharetra=eleifend&magna=pede&ac=libero&consequat=quis&metus=orci&sapien=nullam&ut=molestie&nunc=nibh&vestibulum=in&ante=lectus&ipsum=pellentesque&primis=at&in=nulla&faucibus=suspendisse&orci=potenti&luctus=cras&et=in&ultrices=purus&posuere=eu&cubilia=magna&curae=vulputate&mauris=luctus&viverra=cum&diam=sociis&vitae=natoque&quam=penatibus&suspendisse=et&potenti=magnis&nullam=dis&porttitor=parturient&lacus=montes&at=nascetur&turpis=ridiculus&donec=mus&posuere=vivamus&metus=vestibulum&vitae=sagittis',
    downloadUrl:
      'http://cisco.com/ac/diam/cras.json?cum=viverra&sociis=eget&natoque=congue&penatibus=eget&et=semper&magnis=rutrum&dis=nulla&parturient=nunc&montes=purus&nascetur=phasellus',
    readOnlineUrl:
      'http://census.gov/nec/nisi/volutpat.aspx?dis=eget&parturient=congue',
    coverUrl: 'http://dummyimage.com/156x168.bmp/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/164x113.png/cc0000/ffffff',
  },
  {
    bookId: 22,
    title: 'Stringtough',
    content:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    shortContent:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    publisher: 'Flynn Pearne',
    publisherAt: '5/30/1994',
    pages: 22,
    language: 'Hebrew',
    detailsUrl:
      'http://google.com.hk/molestie/hendrerit/at/vulputate/vitae.html?in=id&hac=justo&habitasse=sit&platea=amet&dictumst=sapien&morbi=dignissim&vestibulum=vestibulum&velit=vestibulum&id=ante&pretium=ipsum&iaculis=primis&diam=in&erat=faucibus&fermentum=orci&justo=luctus&nec=et&condimentum=ultrices&neque=posuere&sapien=cubilia&placerat=curae&ante=nulla&nulla=dapibus&justo=dolor&aliquam=vel&quis=est&turpis=donec&eget=odio&elit=justo&sodales=sollicitudin&scelerisque=ut&mauris=suscipit&sit=a&amet=feugiat&eros=et&suspendisse=eros&accumsan=vestibulum&tortor=ac&quis=est&turpis=lacinia&sed=nisi&ante=venenatis&vivamus=tristique&tortor=fusce&duis=congue&mattis=diam&egestas=id&metus=ornare&aenean=imperdiet&fermentum=sapien&donec=urna&ut=pretium&mauris=nisl&eget=ut&massa=volutpat&tempor=sapien&convallis=arcu&nulla=sed&neque=augue&libero=aliquam&convallis=erat&eget=volutpat&eleifend=in&luctus=congue&ultricies=etiam&eu=justo&nibh=etiam&quisque=pretium&id=iaculis&justo=justo&sit=in&amet=hac&sapien=habitasse&dignissim=platea&vestibulum=dictumst',
    downloadUrl:
      'https://4shared.com/sem/sed/sagittis.js?odio=elit&odio=ac&elementum=nulla&eu=sed&interdum=vel&eu=enim&tincidunt=sit&in=amet&leo=nunc&maecenas=viverra&pulvinar=dapibus&lobortis=nulla&est=suscipit&phasellus=ligula&sit=in&amet=lacus&erat=curabitur&nulla=at&tempus=ipsum&vivamus=ac&in=tellus&felis=semper&eu=interdum&sapien=mauris&cursus=ullamcorper&vestibulum=purus&proin=sit&eu=amet&mi=nulla&nulla=quisque&ac=arcu&enim=libero&in=rutrum&tempor=ac&turpis=lobortis&nec=vel&euismod=dapibus',
    readOnlineUrl:
      'https://microsoft.com/quisque/id/justo/sit/amet.json?vulputate=pellentesque&luctus=viverra&cum=pede&sociis=ac&natoque=diam&penatibus=cras&et=pellentesque&magnis=volutpat&dis=dui&parturient=maecenas&montes=tristique&nascetur=est&ridiculus=et&mus=tempus&vivamus=semper&vestibulum=est&sagittis=quam&sapien=pharetra&cum=magna&sociis=ac&natoque=consequat&penatibus=metus&et=sapien&magnis=ut&dis=nunc&parturient=vestibulum&montes=ante&nascetur=ipsum&ridiculus=primis&mus=in&etiam=faucibus&vel=orci&augue=luctus&vestibulum=et&rutrum=ultrices&rutrum=posuere&neque=cubilia&aenean=curae&auctor=mauris&gravida=viverra&sem=diam',
    coverUrl: 'http://dummyimage.com/229x242.jpg/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/143x207.bmp/cc0000/ffffff',
  },
  {
    bookId: 23,
    title: 'Toughjoyfax',
    content:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    shortContent: 'Nunc purus.',
    publisher: 'Shelton Keller',
    publisherAt: '4/10/1976',
    pages: 23,
    language: 'Telugu',
    detailsUrl:
      'http://msu.edu/praesent/id/massa/id.aspx?proin=non&interdum=lectus&mauris=aliquam&non=sit',
    downloadUrl:
      'https://msu.edu/sit/amet/cursus.jsp?venenatis=augue&lacinia=aliquam&aenean=erat&sit=volutpat&amet=in&justo=congue&morbi=etiam&ut=justo&odio=etiam&cras=pretium&mi=iaculis&pede=justo&malesuada=in&in=hac&imperdiet=habitasse&et=platea&commodo=dictumst&vulputate=etiam&justo=faucibus&in=cursus&blandit=urna&ultrices=ut&enim=tellus&lorem=nulla&ipsum=ut&dolor=erat&sit=id&amet=mauris&consectetuer=vulputate&adipiscing=elementum&elit=nullam&proin=varius&interdum=nulla&mauris=facilisi&non=cras&ligula=non&pellentesque=velit&ultrices=nec&phasellus=nisi&id=vulputate&sapien=nonummy&in=maecenas&sapien=tincidunt&iaculis=lacus&congue=at&vivamus=velit&metus=vivamus&arcu=vel&adipiscing=nulla',
    readOnlineUrl:
      'http://washingtonpost.com/hac/habitasse.xml?mi=vestibulum&integer=quam&ac=sapien&neque=varius&duis=ut&bibendum=blandit&morbi=non&non=interdum&quam=in&nec=ante&dui=vestibulum&luctus=ante&rutrum=ipsum&nulla=primis&tellus=in&in=faucibus&sagittis=orci&dui=luctus&vel=et&nisl=ultrices',
    coverUrl: 'http://dummyimage.com/130x208.jpg/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/148x174.jpg/5fa2dd/ffffff',
  },
  {
    bookId: 24,
    title: 'Zoolab',
    content:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    shortContent:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    publisher: 'Marina Aujean',
    publisherAt: '1/7/1940',
    pages: 24,
    language: 'Czech',
    detailsUrl:
      'http://taobao.com/a/feugiat.aspx?tempus=congue&sit=risus&amet=semper&sem=porta&fusce=volutpat&consequat=quam&nulla=pede&nisl=lobortis&nunc=ligula&nisl=sit&duis=amet&bibendum=eleifend&felis=pede&sed=libero&interdum=quis&venenatis=orci&turpis=nullam&enim=molestie&blandit=nibh&mi=in&in=lectus&porttitor=pellentesque&pede=at&justo=nulla&eu=suspendisse&massa=potenti&donec=cras&dapibus=in&duis=purus&at=eu&velit=magna&eu=vulputate&est=luctus&congue=cum&elementum=sociis&in=natoque&hac=penatibus&habitasse=et&platea=magnis&dictumst=dis&morbi=parturient&vestibulum=montes&velit=nascetur&id=ridiculus&pretium=mus&iaculis=vivamus&diam=vestibulum&erat=sagittis&fermentum=sapien&justo=cum&nec=sociis&condimentum=natoque&neque=penatibus&sapien=et&placerat=magnis&ante=dis&nulla=parturient&justo=montes&aliquam=nascetur&quis=ridiculus&turpis=mus&eget=etiam&elit=vel&sodales=augue&scelerisque=vestibulum&mauris=rutrum&sit=rutrum&amet=neque&eros=aenean&suspendisse=auctor&accumsan=gravida&tortor=sem&quis=praesent&turpis=id&sed=massa&ante=id&vivamus=nisl&tortor=venenatis&duis=lacinia&mattis=aenean',
    downloadUrl:
      'http://wix.com/platea/dictumst.jsp?rhoncus=sapien&mauris=iaculis&enim=congue&leo=vivamus&rhoncus=metus&sed=arcu&vestibulum=adipiscing&sit=molestie&amet=hendrerit&cursus=at&id=vulputate&turpis=vitae&integer=nisl&aliquet=aenean&massa=lectus&id=pellentesque&lobortis=eget&convallis=nunc&tortor=donec&risus=quis&dapibus=orci&augue=eget&vel=orci&accumsan=vehicula&tellus=condimentum&nisi=curabitur&eu=in&orci=libero&mauris=ut&lacinia=massa&sapien=volutpat&quis=convallis&libero=morbi&nullam=odio&sit=odio&amet=elementum&turpis=eu&elementum=interdum&ligula=eu&vehicula=tincidunt&consequat=in&morbi=leo&a=maecenas&ipsum=pulvinar&integer=lobortis&a=est&nibh=phasellus&in=sit&quis=amet&justo=erat&maecenas=nulla&rhoncus=tempus&aliquam=vivamus&lacus=in&morbi=felis&quis=eu&tortor=sapien&id=cursus&nulla=vestibulum&ultrices=proin&aliquet=eu&maecenas=mi&leo=nulla&odio=ac&condimentum=enim&id=in&luctus=tempor&nec=turpis&molestie=nec&sed=euismod&justo=scelerisque&pellentesque=quam&viverra=turpis&pede=adipiscing&ac=lorem&diam=vitae&cras=mattis&pellentesque=nibh&volutpat=ligula&dui=nec',
    readOnlineUrl:
      'http://wordpress.org/diam/id/ornare/imperdiet.js?praesent=donec&blandit=dapibus&nam=duis&nulla=at&integer=velit&pede=eu&justo=est&lacinia=congue&eget=elementum&tincidunt=in&eget=hac&tempus=habitasse&vel=platea&pede=dictumst&morbi=morbi&porttitor=vestibulum&lorem=velit&id=id&ligula=pretium&suspendisse=iaculis&ornare=diam&consequat=erat&lectus=fermentum&in=justo&est=nec&risus=condimentum&auctor=neque&sed=sapien&tristique=placerat&in=ante&tempus=nulla&sit=justo&amet=aliquam&sem=quis&fusce=turpis&consequat=eget&nulla=elit&nisl=sodales&nunc=scelerisque&nisl=mauris&duis=sit&bibendum=amet&felis=eros&sed=suspendisse&interdum=accumsan&venenatis=tortor&turpis=quis&enim=turpis&blandit=sed&mi=ante&in=vivamus&porttitor=tortor&pede=duis&justo=mattis&eu=egestas&massa=metus&donec=aenean&dapibus=fermentum&duis=donec&at=ut&velit=mauris&eu=eget&est=massa&congue=tempor&elementum=convallis&in=nulla&hac=neque&habitasse=libero&platea=convallis&dictumst=eget&morbi=eleifend&vestibulum=luctus&velit=ultricies&id=eu&pretium=nibh&iaculis=quisque&diam=id&erat=justo',
    coverUrl: 'http://dummyimage.com/141x191.bmp/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/247x244.png/5fa2dd/ffffff',
  },
  {
    bookId: 25,
    title: 'Tres-Zap',
    content:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    shortContent: 'Integer tincidunt ante vel ipsum.',
    publisher: 'Rinaldo Aslen',
    publisherAt: '8/21/1942',
    pages: 25,
    language: 'Swahili',
    detailsUrl:
      'http://shinystat.com/faucibus/cursus/urna/ut/tellus.jsp?aliquet=nibh&massa=ligula&id=nec&lobortis=sem&convallis=duis&tortor=aliquam&risus=convallis&dapibus=nunc&augue=proin&vel=at&accumsan=turpis&tellus=a&nisi=pede&eu=posuere&orci=nonummy&mauris=integer&lacinia=non&sapien=velit&quis=donec&libero=diam',
    downloadUrl:
      'https://samsung.com/mauris/morbi/non/lectus/aliquam/sit.aspx?elementum=in&nullam=faucibus&varius=orci&nulla=luctus&facilisi=et&cras=ultrices&non=posuere&velit=cubilia&nec=curae&nisi=mauris&vulputate=viverra&nonummy=diam&maecenas=vitae&tincidunt=quam&lacus=suspendisse&at=potenti&velit=nullam&vivamus=porttitor&vel=lacus&nulla=at',
    readOnlineUrl:
      'http://list-manage.com/iaculis/diam/erat/fermentum/justo/nec/condimentum.png?sed=et&vel=ultrices&enim=posuere&sit=cubilia&amet=curae&nunc=mauris&viverra=viverra&dapibus=diam&nulla=vitae&suscipit=quam&ligula=suspendisse&in=potenti&lacus=nullam&curabitur=porttitor',
    coverUrl: 'http://dummyimage.com/194x143.png/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/151x128.jpg/5fa2dd/ffffff',
  },
  {
    bookId: 26,
    title: 'Rank',
    content:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    shortContent:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    publisher: 'Wynnie Meiningen',
    publisherAt: '3/7/1964',
    pages: 26,
    language: 'Catalan',
    detailsUrl:
      'https://edublogs.org/pretium/nisl/ut/volutpat/sapien/arcu/sed.jpg?vel=lectus&est=pellentesque&donec=at&odio=nulla&justo=suspendisse&sollicitudin=potenti&ut=cras&suscipit=in&a=purus&feugiat=eu',
    downloadUrl:
      'https://shareasale.com/morbi/porttitor.xml?amet=tincidunt&diam=eget&in=tempus&magna=vel&bibendum=pede&imperdiet=morbi&nullam=porttitor&orci=lorem&pede=id&venenatis=ligula&non=suspendisse&sodales=ornare&sed=consequat&tincidunt=lectus&eu=in&felis=est&fusce=risus&posuere=auctor&felis=sed&sed=tristique&lacus=in&morbi=tempus&sem=sit&mauris=amet&laoreet=sem&ut=fusce&rhoncus=consequat&aliquet=nulla&pulvinar=nisl&sed=nunc&nisl=nisl&nunc=duis&rhoncus=bibendum&dui=felis&vel=sed&sem=interdum&sed=venenatis&sagittis=turpis&nam=enim&congue=blandit&risus=mi&semper=in&porta=porttitor&volutpat=pede&quam=justo&pede=eu&lobortis=massa&ligula=donec&sit=dapibus&amet=duis&eleifend=at&pede=velit&libero=eu&quis=est&orci=congue',
    readOnlineUrl:
      'http://unc.edu/vestibulum/sed.xml?tortor=montes&quis=nascetur&turpis=ridiculus&sed=mus&ante=etiam&vivamus=vel&tortor=augue&duis=vestibulum&mattis=rutrum&egestas=rutrum&metus=neque&aenean=aenean&fermentum=auctor&donec=gravida&ut=sem&mauris=praesent&eget=id&massa=massa&tempor=id&convallis=nisl&nulla=venenatis&neque=lacinia&libero=aenean&convallis=sit&eget=amet&eleifend=justo&luctus=morbi&ultricies=ut&eu=odio&nibh=cras&quisque=mi&id=pede&justo=malesuada&sit=in&amet=imperdiet&sapien=et&dignissim=commodo&vestibulum=vulputate&vestibulum=justo&ante=in&ipsum=blandit&primis=ultrices&in=enim',
    coverUrl: 'http://dummyimage.com/108x209.bmp/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/199x203.png/5fa2dd/ffffff',
  },
  {
    bookId: 27,
    title: 'Tin',
    content:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    shortContent: 'Suspendisse potenti.',
    publisher: 'Carter Laurentin',
    publisherAt: '7/7/1933',
    pages: 27,
    language: 'Dzongkha',
    detailsUrl:
      'http://canalblog.com/ultrices/erat/tortor/sollicitudin.js?in=congue&quam=eget&fringilla=semper&rhoncus=rutrum&mauris=nulla&enim=nunc&leo=purus&rhoncus=phasellus&sed=in&vestibulum=felis&sit=donec&amet=semper&cursus=sapien&id=a&turpis=libero&integer=nam&aliquet=dui&massa=proin&id=leo&lobortis=odio&convallis=porttitor&tortor=id&risus=consequat&dapibus=in&augue=consequat',
    downloadUrl:
      'https://weather.com/semper/rutrum/nulla.png?natoque=eu&penatibus=sapien&et=cursus&magnis=vestibulum&dis=proin&parturient=eu&montes=mi&nascetur=nulla&ridiculus=ac&mus=enim&etiam=in&vel=tempor&augue=turpis&vestibulum=nec&rutrum=euismod&rutrum=scelerisque&neque=quam&aenean=turpis&auctor=adipiscing&gravida=lorem&sem=vitae&praesent=mattis&id=nibh&massa=ligula&id=nec&nisl=sem&venenatis=duis&lacinia=aliquam&aenean=convallis&sit=nunc&amet=proin&justo=at',
    readOnlineUrl:
      'https://nymag.com/vestibulum/ac/est/lacinia.xml?sit=ac&amet=leo&consectetuer=pellentesque&adipiscing=ultrices&elit=mattis&proin=odio&interdum=donec&mauris=vitae&non=nisi&ligula=nam&pellentesque=ultrices&ultrices=libero',
    coverUrl: 'http://dummyimage.com/180x182.png/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/138x178.png/5fa2dd/ffffff',
  },
  {
    bookId: 28,
    title: 'Zoolab',
    content:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    shortContent:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    publisher: 'Esther Simchenko',
    publisherAt: '6/23/1982',
    pages: 28,
    language: 'Dutch',
    detailsUrl:
      'http://feedburner.com/vel/lectus/in.png?quis=praesent&tortor=id&id=massa&nulla=id&ultrices=nisl&aliquet=venenatis&maecenas=lacinia&leo=aenean&odio=sit&condimentum=amet&id=justo&luctus=morbi&nec=ut&molestie=odio&sed=cras&justo=mi&pellentesque=pede&viverra=malesuada&pede=in&ac=imperdiet&diam=et&cras=commodo&pellentesque=vulputate&volutpat=justo&dui=in&maecenas=blandit&tristique=ultrices&est=enim&et=lorem&tempus=ipsum&semper=dolor&est=sit&quam=amet&pharetra=consectetuer&magna=adipiscing&ac=elit&consequat=proin&metus=interdum&sapien=mauris&ut=non&nunc=ligula&vestibulum=pellentesque&ante=ultrices&ipsum=phasellus&primis=id&in=sapien&faucibus=in&orci=sapien&luctus=iaculis&et=congue&ultrices=vivamus&posuere=metus&cubilia=arcu&curae=adipiscing&mauris=molestie&viverra=hendrerit&diam=at&vitae=vulputate&quam=vitae&suspendisse=nisl&potenti=aenean&nullam=lectus&porttitor=pellentesque&lacus=eget&at=nunc&turpis=donec&donec=quis&posuere=orci&metus=eget&vitae=orci&ipsum=vehicula&aliquam=condimentum&non=curabitur&mauris=in&morbi=libero&non=ut&lectus=massa&aliquam=volutpat&sit=convallis&amet=morbi&diam=odio&in=odio&magna=elementum&bibendum=eu',
    downloadUrl:
      'http://quantcast.com/malesuada.jsp?sit=sem&amet=mauris&nunc=laoreet&viverra=ut&dapibus=rhoncus&nulla=aliquet&suscipit=pulvinar&ligula=sed&in=nisl&lacus=nunc&curabitur=rhoncus&at=dui&ipsum=vel&ac=sem&tellus=sed&semper=sagittis&interdum=nam&mauris=congue&ullamcorper=risus&purus=semper&sit=porta&amet=volutpat&nulla=quam&quisque=pede&arcu=lobortis&libero=ligula&rutrum=sit&ac=amet&lobortis=eleifend&vel=pede&dapibus=libero&at=quis&diam=orci&nam=nullam&tristique=molestie&tortor=nibh',
    readOnlineUrl:
      'http://yellowbook.com/luctus/et/ultrices/posuere/cubilia.jsp?molestie=maecenas&hendrerit=tristique&at=est&vulputate=et&vitae=tempus&nisl=semper&aenean=est&lectus=quam&pellentesque=pharetra&eget=magna&nunc=ac&donec=consequat&quis=metus&orci=sapien&eget=ut&orci=nunc&vehicula=vestibulum&condimentum=ante&curabitur=ipsum&in=primis&libero=in&ut=faucibus&massa=orci&volutpat=luctus&convallis=et&morbi=ultrices&odio=posuere&odio=cubilia&elementum=curae&eu=mauris&interdum=viverra&eu=diam&tincidunt=vitae&in=quam&leo=suspendisse&maecenas=potenti&pulvinar=nullam&lobortis=porttitor&est=lacus&phasellus=at&sit=turpis&amet=donec&erat=posuere&nulla=metus&tempus=vitae&vivamus=ipsum&in=aliquam&felis=non&eu=mauris&sapien=morbi&cursus=non&vestibulum=lectus&proin=aliquam&eu=sit&mi=amet&nulla=diam&ac=in&enim=magna&in=bibendum&tempor=imperdiet&turpis=nullam&nec=orci&euismod=pede&scelerisque=venenatis&quam=non&turpis=sodales&adipiscing=sed&lorem=tincidunt&vitae=eu&mattis=felis&nibh=fusce',
    coverUrl: 'http://dummyimage.com/245x166.jpg/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/214x240.bmp/cc0000/ffffff',
  },
  {
    bookId: 29,
    title: 'Opela',
    content:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    shortContent:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    publisher: 'Judas Whittam',
    publisherAt: '8/15/1956',
    pages: 29,
    language: 'Burmese',
    detailsUrl:
      'https://yellowpages.com/tortor/risus/dapibus/augue/vel/accumsan.html?at=sollicitudin&vulputate=vitae&vitae=consectetuer&nisl=eget&aenean=rutrum&lectus=at&pellentesque=lorem&eget=integer&nunc=tincidunt&donec=ante&quis=vel&orci=ipsum&eget=praesent&orci=blandit&vehicula=lacinia&condimentum=erat&curabitur=vestibulum&in=sed&libero=magna&ut=at&massa=nunc&volutpat=commodo&convallis=placerat&morbi=praesent&odio=blandit&odio=nam&elementum=nulla&eu=integer&interdum=pede&eu=justo&tincidunt=lacinia&in=eget&leo=tincidunt&maecenas=eget&pulvinar=tempus&lobortis=vel&est=pede&phasellus=morbi&sit=porttitor&amet=lorem&erat=id&nulla=ligula&tempus=suspendisse&vivamus=ornare&in=consequat&felis=lectus&eu=in&sapien=est&cursus=risus&vestibulum=auctor&proin=sed&eu=tristique&mi=in&nulla=tempus&ac=sit&enim=amet&in=sem&tempor=fusce&turpis=consequat&nec=nulla&euismod=nisl&scelerisque=nunc',
    downloadUrl:
      'http://163.com/platea.html?adipiscing=aliquet&lorem=ultrices&vitae=erat&mattis=tortor&nibh=sollicitudin&ligula=mi&nec=sit&sem=amet&duis=lobortis&aliquam=sapien&convallis=sapien&nunc=non&proin=mi&at=integer&turpis=ac&a=neque&pede=duis&posuere=bibendum&nonummy=morbi&integer=non&non=quam&velit=nec&donec=dui&diam=luctus&neque=rutrum&vestibulum=nulla&eget=tellus&vulputate=in&ut=sagittis&ultrices=dui&vel=vel&augue=nisl&vestibulum=duis&ante=ac&ipsum=nibh&primis=fusce&in=lacus&faucibus=purus&orci=aliquet&luctus=at&et=feugiat&ultrices=non&posuere=pretium&cubilia=quis&curae=lectus&donec=suspendisse&pharetra=potenti&magna=in&vestibulum=eleifend&aliquet=quam&ultrices=a&erat=odio&tortor=in&sollicitudin=hac&mi=habitasse&sit=platea&amet=dictumst&lobortis=maecenas&sapien=ut&sapien=massa&non=quis&mi=augue&integer=luctus&ac=tincidunt&neque=nulla&duis=mollis&bibendum=molestie&morbi=lorem&non=quisque&quam=ut&nec=erat',
    readOnlineUrl:
      'https://dagondesign.com/primis/in/faucibus/orci/luctus/et.html?elit=sit&proin=amet&risus=lobortis&praesent=sapien&lectus=sapien&vestibulum=non&quam=mi&sapien=integer&varius=ac&ut=neque&blandit=duis&non=bibendum',
    coverUrl: 'http://dummyimage.com/160x134.bmp/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/212x144.bmp/cc0000/ffffff',
  },
  {
    bookId: 30,
    title: 'Ronstring',
    content:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    shortContent:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    publisher: 'Codi Harfleet',
    publisherAt: '11/15/1987',
    pages: 30,
    language: 'West Frisian',
    detailsUrl:
      'http://1688.com/proin/risus.json?donec=faucibus&posuere=orci&metus=luctus&vitae=et&ipsum=ultrices&aliquam=posuere&non=cubilia&mauris=curae&morbi=mauris&non=viverra&lectus=diam&aliquam=vitae&sit=quam&amet=suspendisse&diam=potenti&in=nullam&magna=porttitor&bibendum=lacus&imperdiet=at&nullam=turpis&orci=donec&pede=posuere&venenatis=metus&non=vitae&sodales=ipsum&sed=aliquam&tincidunt=non&eu=mauris&felis=morbi&fusce=non&posuere=lectus&felis=aliquam&sed=sit&lacus=amet&morbi=diam&sem=in&mauris=magna&laoreet=bibendum&ut=imperdiet&rhoncus=nullam&aliquet=orci&pulvinar=pede&sed=venenatis&nisl=non&nunc=sodales&rhoncus=sed&dui=tincidunt&vel=eu&sem=felis&sed=fusce&sagittis=posuere&nam=felis&congue=sed&risus=lacus&semper=morbi&porta=sem&volutpat=mauris&quam=laoreet&pede=ut&lobortis=rhoncus&ligula=aliquet&sit=pulvinar',
    downloadUrl:
      'https://nymag.com/maecenas/pulvinar/lobortis.js?phasellus=quis&id=turpis&sapien=sed&in=ante&sapien=vivamus&iaculis=tortor&congue=duis&vivamus=mattis&metus=egestas&arcu=metus&adipiscing=aenean&molestie=fermentum&hendrerit=donec&at=ut&vulputate=mauris&vitae=eget&nisl=massa&aenean=tempor&lectus=convallis&pellentesque=nulla&eget=neque&nunc=libero&donec=convallis&quis=eget&orci=eleifend&eget=luctus&orci=ultricies&vehicula=eu&condimentum=nibh&curabitur=quisque&in=id&libero=justo&ut=sit&massa=amet&volutpat=sapien&convallis=dignissim&morbi=vestibulum&odio=vestibulum&odio=ante&elementum=ipsum&eu=primis&interdum=in&eu=faucibus&tincidunt=orci&in=luctus&leo=et&maecenas=ultrices&pulvinar=posuere&lobortis=cubilia&est=curae&phasellus=nulla&sit=dapibus&amet=dolor&erat=vel&nulla=est&tempus=donec&vivamus=odio&in=justo&felis=sollicitudin&eu=ut&sapien=suscipit&cursus=a&vestibulum=feugiat&proin=et&eu=eros&mi=vestibulum&nulla=ac&ac=est&enim=lacinia&in=nisi&tempor=venenatis&turpis=tristique&nec=fusce&euismod=congue&scelerisque=diam&quam=id&turpis=ornare&adipiscing=imperdiet',
    readOnlineUrl:
      'https://hibu.com/nunc/purus/phasellus/in/felis/donec/semper.png?luctus=rutrum&rutrum=rutrum&nulla=neque&tellus=aenean&in=auctor&sagittis=gravida&dui=sem&vel=praesent&nisl=id&duis=massa&ac=id&nibh=nisl&fusce=venenatis&lacus=lacinia&purus=aenean&aliquet=sit&at=amet&feugiat=justo&non=morbi&pretium=ut&quis=odio&lectus=cras&suspendisse=mi&potenti=pede&in=malesuada&eleifend=in&quam=imperdiet&a=et&odio=commodo&in=vulputate&hac=justo&habitasse=in&platea=blandit&dictumst=ultrices&maecenas=enim&ut=lorem&massa=ipsum&quis=dolor&augue=sit&luctus=amet&tincidunt=consectetuer&nulla=adipiscing&mollis=elit&molestie=proin&lorem=interdum&quisque=mauris&ut=non&erat=ligula&curabitur=pellentesque&gravida=ultrices&nisi=phasellus&at=id&nibh=sapien&in=in&hac=sapien&habitasse=iaculis&platea=congue&dictumst=vivamus&aliquam=metus&augue=arcu&quam=adipiscing&sollicitudin=molestie&vitae=hendrerit&consectetuer=at&eget=vulputate&rutrum=vitae&at=nisl&lorem=aenean&integer=lectus&tincidunt=pellentesque&ante=eget&vel=nunc&ipsum=donec&praesent=quis',
    coverUrl: 'http://dummyimage.com/183x206.bmp/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/187x152.png/cc0000/ffffff',
  },
  {
    bookId: 31,
    title: 'Tampflex',
    content:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    shortContent:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    publisher: 'Quinton Wellbelove',
    publisherAt: '6/30/1961',
    pages: 31,
    language: 'Kannada',
    detailsUrl:
      'https://amazon.com/consequat/dui/nec/nisi/volutpat.json?euismod=lobortis&scelerisque=convallis&quam=tortor&turpis=risus&adipiscing=dapibus&lorem=augue&vitae=vel&mattis=accumsan&nibh=tellus&ligula=nisi&nec=eu&sem=orci&duis=mauris&aliquam=lacinia&convallis=sapien&nunc=quis&proin=libero&at=nullam&turpis=sit&a=amet&pede=turpis&posuere=elementum&nonummy=ligula&integer=vehicula&non=consequat&velit=morbi&donec=a&diam=ipsum',
    downloadUrl:
      'http://examiner.com/in/faucibus/orci.html?eu=condimentum&magna=curabitur&vulputate=in&luctus=libero&cum=ut&sociis=massa&natoque=volutpat&penatibus=convallis&et=morbi&magnis=odio&dis=odio&parturient=elementum&montes=eu&nascetur=interdum&ridiculus=eu&mus=tincidunt&vivamus=in&vestibulum=leo&sagittis=maecenas&sapien=pulvinar&cum=lobortis&sociis=est&natoque=phasellus&penatibus=sit&et=amet&magnis=erat&dis=nulla&parturient=tempus&montes=vivamus&nascetur=in&ridiculus=felis&mus=eu&etiam=sapien&vel=cursus&augue=vestibulum&vestibulum=proin&rutrum=eu&rutrum=mi&neque=nulla&aenean=ac&auctor=enim&gravida=in',
    readOnlineUrl:
      'http://trellian.com/luctus/et/ultrices/posuere/cubilia/curae.png?donec=ipsum&odio=primis&justo=in&sollicitudin=faucibus&ut=orci&suscipit=luctus&a=et&feugiat=ultrices&et=posuere&eros=cubilia&vestibulum=curae&ac=duis&est=faucibus&lacinia=accumsan&nisi=odio&venenatis=curabitur&tristique=convallis&fusce=duis&congue=consequat&diam=dui&id=nec&ornare=nisi&imperdiet=volutpat&sapien=eleifend&urna=donec&pretium=ut&nisl=dolor&ut=morbi&volutpat=vel&sapien=lectus&arcu=in&sed=quam&augue=fringilla&aliquam=rhoncus&erat=mauris&volutpat=enim&in=leo&congue=rhoncus&etiam=sed&justo=vestibulum&etiam=sit&pretium=amet&iaculis=cursus&justo=id&in=turpis&hac=integer&habitasse=aliquet&platea=massa&dictumst=id&etiam=lobortis&faucibus=convallis&cursus=tortor&urna=risus&ut=dapibus&tellus=augue&nulla=vel&ut=accumsan&erat=tellus&id=nisi&mauris=eu&vulputate=orci&elementum=mauris&nullam=lacinia&varius=sapien&nulla=quis&facilisi=libero&cras=nullam&non=sit&velit=amet&nec=turpis&nisi=elementum&vulputate=ligula&nonummy=vehicula&maecenas=consequat&tincidunt=morbi&lacus=a&at=ipsum&velit=integer&vivamus=a&vel=nibh&nulla=in&eget=quis&eros=justo&elementum=maecenas&pellentesque=rhoncus&quisque=aliquam&porta=lacus&volutpat=morbi&erat=quis&quisque=tortor&erat=id&eros=nulla&viverra=ultrices&eget=aliquet&congue=maecenas&eget=leo&semper=odio&rutrum=condimentum&nulla=id&nunc=luctus',
    coverUrl: 'http://dummyimage.com/230x237.bmp/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/247x105.png/5fa2dd/ffffff',
  },
  {
    bookId: 32,
    title: 'Tampflex',
    content:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    shortContent:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    publisher: 'Terrance Davydkov',
    publisherAt: '10/26/1922',
    pages: 32,
    language: 'Nepali',
    detailsUrl:
      'http://vk.com/dolor/quis/odio/consequat.xml?habitasse=nascetur&platea=ridiculus&dictumst=mus&maecenas=etiam&ut=vel&massa=augue&quis=vestibulum&augue=rutrum&luctus=rutrum&tincidunt=neque&nulla=aenean&mollis=auctor&molestie=gravida&lorem=sem&quisque=praesent&ut=id&erat=massa&curabitur=id&gravida=nisl&nisi=venenatis&at=lacinia&nibh=aenean&in=sit&hac=amet&habitasse=justo&platea=morbi&dictumst=ut&aliquam=odio&augue=cras&quam=mi&sollicitudin=pede&vitae=malesuada&consectetuer=in&eget=imperdiet&rutrum=et&at=commodo&lorem=vulputate&integer=justo&tincidunt=in',
    downloadUrl:
      'http://cmu.edu/parturient.png?sapien=sit&ut=amet&nunc=cursus&vestibulum=id&ante=turpis&ipsum=integer&primis=aliquet&in=massa&faucibus=id&orci=lobortis&luctus=convallis&et=tortor&ultrices=risus&posuere=dapibus&cubilia=augue&curae=vel&mauris=accumsan&viverra=tellus&diam=nisi&vitae=eu&quam=orci&suspendisse=mauris&potenti=lacinia',
    readOnlineUrl:
      'http://wp.com/donec/vitae/nisi.json?curae=nisl&duis=duis&faucibus=bibendum&accumsan=felis&odio=sed&curabitur=interdum&convallis=venenatis&duis=turpis&consequat=enim&dui=blandit&nec=mi&nisi=in&volutpat=porttitor&eleifend=pede&donec=justo&ut=eu&dolor=massa&morbi=donec&vel=dapibus&lectus=duis&in=at&quam=velit&fringilla=eu&rhoncus=est&mauris=congue&enim=elementum&leo=in&rhoncus=hac&sed=habitasse&vestibulum=platea&sit=dictumst&amet=morbi&cursus=vestibulum&id=velit&turpis=id&integer=pretium&aliquet=iaculis&massa=diam&id=erat&lobortis=fermentum&convallis=justo&tortor=nec&risus=condimentum&dapibus=neque&augue=sapien&vel=placerat&accumsan=ante&tellus=nulla&nisi=justo&eu=aliquam&orci=quis&mauris=turpis&lacinia=eget&sapien=elit&quis=sodales&libero=scelerisque&nullam=mauris&sit=sit&amet=amet&turpis=eros&elementum=suspendisse&ligula=accumsan&vehicula=tortor&consequat=quis&morbi=turpis&a=sed&ipsum=ante&integer=vivamus',
    coverUrl: 'http://dummyimage.com/126x102.png/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/171x214.bmp/cc0000/ffffff',
  },
  {
    bookId: 33,
    title: 'Stronghold',
    content:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    shortContent: 'Praesent lectus.',
    publisher: 'Izzy Goodwins',
    publisherAt: '6/21/1984',
    pages: 33,
    language: 'Yiddish',
    detailsUrl:
      'https://is.gd/nec/condimentum/neque/sapien/placerat.aspx?sit=condimentum&amet=neque&sem=sapien&fusce=placerat&consequat=ante&nulla=nulla&nisl=justo&nunc=aliquam&nisl=quis&duis=turpis&bibendum=eget&felis=elit&sed=sodales&interdum=scelerisque&venenatis=mauris&turpis=sit&enim=amet&blandit=eros&mi=suspendisse&in=accumsan&porttitor=tortor&pede=quis&justo=turpis&eu=sed&massa=ante&donec=vivamus&dapibus=tortor&duis=duis&at=mattis&velit=egestas&eu=metus&est=aenean&congue=fermentum&elementum=donec&in=ut&hac=mauris&habitasse=eget&platea=massa&dictumst=tempor&morbi=convallis&vestibulum=nulla&velit=neque&id=libero&pretium=convallis&iaculis=eget&diam=eleifend&erat=luctus&fermentum=ultricies&justo=eu',
    downloadUrl:
      'http://instagram.com/mi/integer/ac.jsp?nibh=phasellus&fusce=sit&lacus=amet&purus=erat&aliquet=nulla&at=tempus&feugiat=vivamus&non=in&pretium=felis&quis=eu&lectus=sapien&suspendisse=cursus&potenti=vestibulum&in=proin&eleifend=eu&quam=mi&a=nulla&odio=ac&in=enim&hac=in&habitasse=tempor&platea=turpis&dictumst=nec&maecenas=euismod&ut=scelerisque&massa=quam&quis=turpis&augue=adipiscing&luctus=lorem&tincidunt=vitae&nulla=mattis&mollis=nibh&molestie=ligula&lorem=nec&quisque=sem&ut=duis&erat=aliquam&curabitur=convallis&gravida=nunc&nisi=proin&at=at&nibh=turpis&in=a&hac=pede&habitasse=posuere&platea=nonummy&dictumst=integer&aliquam=non&augue=velit&quam=donec&sollicitudin=diam&vitae=neque&consectetuer=vestibulum&eget=eget&rutrum=vulputate&at=ut&lorem=ultrices&integer=vel&tincidunt=augue&ante=vestibulum&vel=ante&ipsum=ipsum&praesent=primis&blandit=in&lacinia=faucibus&erat=orci&vestibulum=luctus&sed=et&magna=ultrices&at=posuere&nunc=cubilia&commodo=curae&placerat=donec&praesent=pharetra&blandit=magna&nam=vestibulum&nulla=aliquet&integer=ultrices&pede=erat&justo=tortor',
    readOnlineUrl:
      'https://plala.or.jp/lectus/in/est/risus.json?viverra=habitasse&diam=platea&vitae=dictumst&quam=aliquam&suspendisse=augue&potenti=quam&nullam=sollicitudin&porttitor=vitae&lacus=consectetuer&at=eget&turpis=rutrum&donec=at&posuere=lorem&metus=integer&vitae=tincidunt&ipsum=ante&aliquam=vel&non=ipsum&mauris=praesent&morbi=blandit&non=lacinia&lectus=erat&aliquam=vestibulum&sit=sed&amet=magna&diam=at&in=nunc&magna=commodo&bibendum=placerat&imperdiet=praesent&nullam=blandit&orci=nam&pede=nulla&venenatis=integer&non=pede&sodales=justo&sed=lacinia&tincidunt=eget&eu=tincidunt&felis=eget&fusce=tempus&posuere=vel&felis=pede&sed=morbi&lacus=porttitor&morbi=lorem&sem=id&mauris=ligula&laoreet=suspendisse&ut=ornare&rhoncus=consequat&aliquet=lectus&pulvinar=in&sed=est&nisl=risus&nunc=auctor&rhoncus=sed&dui=tristique&vel=in&sem=tempus&sed=sit&sagittis=amet&nam=sem&congue=fusce&risus=consequat&semper=nulla&porta=nisl&volutpat=nunc&quam=nisl&pede=duis&lobortis=bibendum&ligula=felis&sit=sed&amet=interdum&eleifend=venenatis&pede=turpis&libero=enim&quis=blandit&orci=mi&nullam=in&molestie=porttitor&nibh=pede&in=justo&lectus=eu&pellentesque=massa&at=donec&nulla=dapibus&suspendisse=duis&potenti=at&cras=velit&in=eu&purus=est&eu=congue&magna=elementum&vulputate=in&luctus=hac&cum=habitasse&sociis=platea&natoque=dictumst',
    coverUrl: 'http://dummyimage.com/202x112.jpg/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/213x193.bmp/dddddd/000000',
  },
  {
    bookId: 34,
    title: 'It',
    content:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    shortContent:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    publisher: 'Noellyn Thal',
    publisherAt: '4/21/2004',
    pages: 34,
    language: 'Northern Sotho',
    detailsUrl:
      'http://dailymail.co.uk/nonummy/integer/non.js?phasellus=elit&id=proin&sapien=risus&in=praesent&sapien=lectus&iaculis=vestibulum&congue=quam&vivamus=sapien&metus=varius&arcu=ut&adipiscing=blandit&molestie=non&hendrerit=interdum&at=in&vulputate=ante&vitae=vestibulum&nisl=ante&aenean=ipsum&lectus=primis&pellentesque=in&eget=faucibus&nunc=orci&donec=luctus&quis=et&orci=ultrices&eget=posuere&orci=cubilia&vehicula=curae&condimentum=duis&curabitur=faucibus&in=accumsan&libero=odio&ut=curabitur&massa=convallis&volutpat=duis&convallis=consequat&morbi=dui&odio=nec&odio=nisi&elementum=volutpat&eu=eleifend&interdum=donec&eu=ut&tincidunt=dolor&in=morbi&leo=vel&maecenas=lectus&pulvinar=in&lobortis=quam&est=fringilla&phasellus=rhoncus&sit=mauris&amet=enim&erat=leo&nulla=rhoncus&tempus=sed&vivamus=vestibulum&in=sit&felis=amet&eu=cursus&sapien=id&cursus=turpis&vestibulum=integer&proin=aliquet&eu=massa&mi=id&nulla=lobortis&ac=convallis&enim=tortor&in=risus&tempor=dapibus&turpis=augue&nec=vel&euismod=accumsan&scelerisque=tellus&quam=nisi&turpis=eu',
    downloadUrl:
      'http://nih.gov/vivamus/metus/arcu/adipiscing/molestie/hendrerit/at.html?eu=ultrices&interdum=enim&eu=lorem&tincidunt=ipsum&in=dolor&leo=sit&maecenas=amet&pulvinar=consectetuer&lobortis=adipiscing',
    readOnlineUrl:
      'https://cdbaby.com/urna/pretium/nisl/ut/volutpat/sapien.png?fusce=curabitur&posuere=in&felis=libero&sed=ut&lacus=massa&morbi=volutpat&sem=convallis&mauris=morbi&laoreet=odio&ut=odio&rhoncus=elementum&aliquet=eu&pulvinar=interdum&sed=eu&nisl=tincidunt&nunc=in&rhoncus=leo&dui=maecenas&vel=pulvinar&sem=lobortis&sed=est&sagittis=phasellus&nam=sit&congue=amet&risus=erat&semper=nulla&porta=tempus&volutpat=vivamus&quam=in&pede=felis&lobortis=eu&ligula=sapien&sit=cursus&amet=vestibulum&eleifend=proin&pede=eu&libero=mi&quis=nulla&orci=ac&nullam=enim&molestie=in&nibh=tempor&in=turpis&lectus=nec&pellentesque=euismod&at=scelerisque&nulla=quam&suspendisse=turpis&potenti=adipiscing&cras=lorem&in=vitae&purus=mattis&eu=nibh&magna=ligula&vulputate=nec&luctus=sem&cum=duis&sociis=aliquam&natoque=convallis&penatibus=nunc&et=proin&magnis=at&dis=turpis&parturient=a&montes=pede&nascetur=posuere&ridiculus=nonummy&mus=integer&vivamus=non&vestibulum=velit&sagittis=donec&sapien=diam&cum=neque&sociis=vestibulum&natoque=eget&penatibus=vulputate&et=ut&magnis=ultrices',
    coverUrl: 'http://dummyimage.com/173x110.bmp/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/244x181.bmp/cc0000/ffffff',
  },
  {
    bookId: 35,
    title: 'Lotlux',
    content: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    shortContent:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    publisher: 'Archie Dinsell',
    publisherAt: '5/21/1986',
    pages: 35,
    language: 'Northern Sotho',
    detailsUrl:
      'http://ibm.com/sed/magna/at/nunc/commodo/placerat.jpg?ipsum=nec&integer=nisi&a=vulputate&nibh=nonummy&in=maecenas&quis=tincidunt&justo=lacus&maecenas=at&rhoncus=velit&aliquam=vivamus&lacus=vel&morbi=nulla&quis=eget&tortor=eros&id=elementum&nulla=pellentesque&ultrices=quisque&aliquet=porta&maecenas=volutpat&leo=erat&odio=quisque&condimentum=erat&id=eros&luctus=viverra&nec=eget&molestie=congue&sed=eget&justo=semper&pellentesque=rutrum&viverra=nulla&pede=nunc&ac=purus&diam=phasellus&cras=in&pellentesque=felis&volutpat=donec&dui=semper&maecenas=sapien&tristique=a&est=libero&et=nam&tempus=dui&semper=proin&est=leo&quam=odio&pharetra=porttitor&magna=id&ac=consequat&consequat=in&metus=consequat&sapien=ut&ut=nulla&nunc=sed&vestibulum=accumsan&ante=felis&ipsum=ut&primis=at&in=dolor&faucibus=quis&orci=odio&luctus=consequat&et=varius&ultrices=integer&posuere=ac',
    downloadUrl:
      'http://delicious.com/orci/nullam/molestie/nibh/in/lectus/pellentesque.xml?enim=lobortis&leo=convallis&rhoncus=tortor&sed=risus&vestibulum=dapibus&sit=augue&amet=vel&cursus=accumsan&id=tellus&turpis=nisi&integer=eu&aliquet=orci&massa=mauris&id=lacinia&lobortis=sapien&convallis=quis&tortor=libero&risus=nullam&dapibus=sit&augue=amet&vel=turpis&accumsan=elementum&tellus=ligula&nisi=vehicula&eu=consequat&orci=morbi&mauris=a&lacinia=ipsum&sapien=integer&quis=a&libero=nibh&nullam=in&sit=quis&amet=justo&turpis=maecenas&elementum=rhoncus&ligula=aliquam&vehicula=lacus&consequat=morbi&morbi=quis&a=tortor&ipsum=id&integer=nulla&a=ultrices&nibh=aliquet&in=maecenas&quis=leo&justo=odio&maecenas=condimentum&rhoncus=id&aliquam=luctus&lacus=nec&morbi=molestie&quis=sed&tortor=justo&id=pellentesque&nulla=viverra&ultrices=pede&aliquet=ac&maecenas=diam&leo=cras&odio=pellentesque&condimentum=volutpat',
    readOnlineUrl: 'https://virginia.edu/vivamus/vel.js?suspendisse=cras',
    coverUrl: 'http://dummyimage.com/215x122.bmp/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/248x151.png/dddddd/000000',
  },
  {
    bookId: 36,
    title: 'Lotstring',
    content:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    shortContent:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    publisher: 'Shanna Careless',
    publisherAt: '12/21/2001',
    pages: 36,
    language: 'Hiri Motu',
    detailsUrl:
      'https://delicious.com/posuere/cubilia/curae.xml?ligula=sit&in=amet&lacus=cursus&curabitur=id&at=turpis&ipsum=integer&ac=aliquet&tellus=massa&semper=id&interdum=lobortis&mauris=convallis',
    downloadUrl:
      'http://livejournal.com/id/nisl/venenatis/lacinia/aenean.jsp?tincidunt=ultrices&eget=posuere&tempus=cubilia&vel=curae&pede=donec&morbi=pharetra&porttitor=magna&lorem=vestibulum&id=aliquet&ligula=ultrices&suspendisse=erat&ornare=tortor&consequat=sollicitudin&lectus=mi&in=sit&est=amet&risus=lobortis&auctor=sapien&sed=sapien&tristique=non&in=mi&tempus=integer&sit=ac&amet=neque&sem=duis&fusce=bibendum&consequat=morbi&nulla=non&nisl=quam&nunc=nec&nisl=dui&duis=luctus&bibendum=rutrum&felis=nulla&sed=tellus&interdum=in&venenatis=sagittis&turpis=dui&enim=vel&blandit=nisl&mi=duis&in=ac&porttitor=nibh&pede=fusce&justo=lacus&eu=purus&massa=aliquet&donec=at&dapibus=feugiat&duis=non&at=pretium&velit=quis&eu=lectus&est=suspendisse&congue=potenti&elementum=in&in=eleifend&hac=quam&habitasse=a&platea=odio&dictumst=in&morbi=hac&vestibulum=habitasse&velit=platea&id=dictumst&pretium=maecenas&iaculis=ut&diam=massa&erat=quis&fermentum=augue&justo=luctus&nec=tincidunt&condimentum=nulla&neque=mollis&sapien=molestie&placerat=lorem&ante=quisque&nulla=ut&justo=erat&aliquam=curabitur&quis=gravida&turpis=nisi&eget=at&elit=nibh&sodales=in&scelerisque=hac&mauris=habitasse&sit=platea&amet=dictumst&eros=aliquam&suspendisse=augue&accumsan=quam&tortor=sollicitudin',
    readOnlineUrl:
      'http://1und1.de/rutrum/rutrum/neque/aenean.jpg?sapien=integer&in=ac&sapien=neque&iaculis=duis&congue=bibendum&vivamus=morbi&metus=non&arcu=quam&adipiscing=nec&molestie=dui&hendrerit=luctus&at=rutrum&vulputate=nulla&vitae=tellus&nisl=in&aenean=sagittis&lectus=dui&pellentesque=vel&eget=nisl',
    coverUrl: 'http://dummyimage.com/235x177.jpg/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/205x113.jpg/dddddd/000000',
  },
  {
    bookId: 37,
    title: 'Fintone',
    content:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    shortContent:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    publisher: 'Marcella Ganford',
    publisherAt: '9/20/1986',
    pages: 37,
    language: 'Georgian',
    detailsUrl:
      'https://businessinsider.com/donec/semper/sapien/a/libero/nam.jpg?placerat=eu&praesent=mi&blandit=nulla&nam=ac&nulla=enim&integer=in&pede=tempor&justo=turpis&lacinia=nec&eget=euismod&tincidunt=scelerisque&eget=quam&tempus=turpis&vel=adipiscing&pede=lorem&morbi=vitae&porttitor=mattis&lorem=nibh&id=ligula&ligula=nec&suspendisse=sem&ornare=duis&consequat=aliquam&lectus=convallis&in=nunc&est=proin&risus=at&auctor=turpis&sed=a&tristique=pede&in=posuere&tempus=nonummy&sit=integer&amet=non',
    downloadUrl:
      'http://globo.com/dictumst/etiam/faucibus.xml?quisque=felis&porta=sed&volutpat=lacus&erat=morbi&quisque=sem&erat=mauris&eros=laoreet&viverra=ut&eget=rhoncus&congue=aliquet&eget=pulvinar&semper=sed&rutrum=nisl&nulla=nunc&nunc=rhoncus&purus=dui&phasellus=vel&in=sem&felis=sed&donec=sagittis&semper=nam&sapien=congue&a=risus',
    readOnlineUrl:
      'https://amazon.de/velit/vivamus.xml?maecenas=curae&pulvinar=nulla&lobortis=dapibus&est=dolor&phasellus=vel&sit=est&amet=donec&erat=odio&nulla=justo&tempus=sollicitudin&vivamus=ut&in=suscipit&felis=a&eu=feugiat&sapien=et&cursus=eros&vestibulum=vestibulum&proin=ac&eu=est&mi=lacinia&nulla=nisi&ac=venenatis&enim=tristique&in=fusce&tempor=congue&turpis=diam&nec=id&euismod=ornare&scelerisque=imperdiet&quam=sapien&turpis=urna&adipiscing=pretium&lorem=nisl&vitae=ut&mattis=volutpat&nibh=sapien&ligula=arcu&nec=sed&sem=augue&duis=aliquam&aliquam=erat&convallis=volutpat&nunc=in&proin=congue&at=etiam&turpis=justo&a=etiam&pede=pretium&posuere=iaculis&nonummy=justo&integer=in&non=hac&velit=habitasse&donec=platea&diam=dictumst&neque=etiam',
    coverUrl: 'http://dummyimage.com/172x183.jpg/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/108x144.bmp/cc0000/ffffff',
  },
  {
    bookId: 38,
    title: 'Flexidy',
    content:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    shortContent:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    publisher: 'Lexis Manjot',
    publisherAt: '4/14/1926',
    pages: 38,
    language: 'Dhivehi',
    detailsUrl:
      'http://cam.ac.uk/potenti/nullam/porttitor.json?amet=nulla&justo=facilisi&morbi=cras&ut=non&odio=velit&cras=nec&mi=nisi&pede=vulputate&malesuada=nonummy&in=maecenas&imperdiet=tincidunt&et=lacus&commodo=at&vulputate=velit&justo=vivamus&in=vel&blandit=nulla&ultrices=eget&enim=eros&lorem=elementum&ipsum=pellentesque&dolor=quisque&sit=porta&amet=volutpat&consectetuer=erat&adipiscing=quisque&elit=erat&proin=eros&interdum=viverra&mauris=eget&non=congue&ligula=eget&pellentesque=semper&ultrices=rutrum&phasellus=nulla&id=nunc&sapien=purus&in=phasellus&sapien=in&iaculis=felis&congue=donec&vivamus=semper&metus=sapien&arcu=a&adipiscing=libero&molestie=nam&hendrerit=dui&at=proin',
    downloadUrl:
      'https://wikia.com/luctus/et/ultrices/posuere/cubilia.js?vitae=dapibus&quam=dolor&suspendisse=vel&potenti=est&nullam=donec&porttitor=odio&lacus=justo&at=sollicitudin&turpis=ut&donec=suscipit&posuere=a&metus=feugiat&vitae=et&ipsum=eros&aliquam=vestibulum',
    readOnlineUrl:
      'https://dagondesign.com/elit/proin/risus.js?hac=in&habitasse=sagittis&platea=dui&dictumst=vel&morbi=nisl&vestibulum=duis&velit=ac&id=nibh&pretium=fusce&iaculis=lacus&diam=purus&erat=aliquet&fermentum=at&justo=feugiat&nec=non&condimentum=pretium&neque=quis&sapien=lectus&placerat=suspendisse&ante=potenti&nulla=in&justo=eleifend&aliquam=quam&quis=a&turpis=odio&eget=in&elit=hac&sodales=habitasse&scelerisque=platea&mauris=dictumst&sit=maecenas&amet=ut&eros=massa&suspendisse=quis&accumsan=augue&tortor=luctus&quis=tincidunt&turpis=nulla&sed=mollis&ante=molestie&vivamus=lorem&tortor=quisque&duis=ut&mattis=erat&egestas=curabitur&metus=gravida&aenean=nisi&fermentum=at&donec=nibh&ut=in&mauris=hac&eget=habitasse&massa=platea&tempor=dictumst&convallis=aliquam&nulla=augue&neque=quam&libero=sollicitudin&convallis=vitae&eget=consectetuer&eleifend=eget&luctus=rutrum&ultricies=at&eu=lorem&nibh=integer&quisque=tincidunt&id=ante&justo=vel&sit=ipsum&amet=praesent&sapien=blandit&dignissim=lacinia&vestibulum=erat&vestibulum=vestibulum&ante=sed&ipsum=magna',
    coverUrl: 'http://dummyimage.com/167x164.png/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/172x228.bmp/dddddd/000000',
  },
  {
    bookId: 39,
    title: 'Zamit',
    content:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    shortContent:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    publisher: 'Raffaello Biggans',
    publisherAt: '3/9/1955',
    pages: 39,
    language: 'Romanian',
    detailsUrl:
      'http://freewebs.com/curae/mauris/viverra/diam/vitae/quam.aspx?fermentum=turpis&justo=integer&nec=aliquet&condimentum=massa&neque=id&sapien=lobortis&placerat=convallis&ante=tortor&nulla=risus&justo=dapibus&aliquam=augue&quis=vel&turpis=accumsan&eget=tellus&elit=nisi&sodales=eu&scelerisque=orci&mauris=mauris&sit=lacinia&amet=sapien&eros=quis&suspendisse=libero&accumsan=nullam&tortor=sit&quis=amet&turpis=turpis',
    downloadUrl:
      'https://unc.edu/nulla/ut.js?sit=in&amet=faucibus&cursus=orci&id=luctus&turpis=et&integer=ultrices&aliquet=posuere&massa=cubilia&id=curae&lobortis=donec&convallis=pharetra',
    readOnlineUrl:
      'http://eventbrite.com/accumsan/tortor/quis/turpis.js?at=elementum&ipsum=eu&ac=interdum&tellus=eu&semper=tincidunt&interdum=in&mauris=leo&ullamcorper=maecenas&purus=pulvinar&sit=lobortis&amet=est',
    coverUrl: 'http://dummyimage.com/156x250.jpg/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/150x116.png/5fa2dd/ffffff',
  },
  {
    bookId: 40,
    title: 'Stronghold',
    content:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    shortContent:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    publisher: 'Alphonso Domleo',
    publisherAt: '12/5/1990',
    pages: 40,
    language: 'Amharic',
    detailsUrl:
      'http://hubpages.com/amet/diam.jsp?eros=consequat&elementum=lectus&pellentesque=in&quisque=est&porta=risus&volutpat=auctor&erat=sed&quisque=tristique&erat=in&eros=tempus&viverra=sit&eget=amet&congue=sem&eget=fusce&semper=consequat&rutrum=nulla&nulla=nisl&nunc=nunc&purus=nisl&phasellus=duis&in=bibendum&felis=felis&donec=sed&semper=interdum&sapien=venenatis&a=turpis&libero=enim&nam=blandit&dui=mi&proin=in&leo=porttitor&odio=pede&porttitor=justo&id=eu&consequat=massa&in=donec&consequat=dapibus&ut=duis&nulla=at&sed=velit&accumsan=eu&felis=est&ut=congue&at=elementum&dolor=in&quis=hac&odio=habitasse&consequat=platea&varius=dictumst&integer=morbi&ac=vestibulum&leo=velit&pellentesque=id&ultrices=pretium&mattis=iaculis&odio=diam&donec=erat&vitae=fermentum',
    downloadUrl:
      'http://google.pl/pretium.aspx?in=morbi&blandit=a&ultrices=ipsum&enim=integer&lorem=a&ipsum=nibh&dolor=in&sit=quis&amet=justo&consectetuer=maecenas&adipiscing=rhoncus&elit=aliquam&proin=lacus&interdum=morbi&mauris=quis&non=tortor&ligula=id&pellentesque=nulla&ultrices=ultrices&phasellus=aliquet&id=maecenas&sapien=leo&in=odio',
    readOnlineUrl:
      'https://odnoklassniki.ru/congue/diam/id/ornare/imperdiet.jpg?sem=arcu&praesent=adipiscing&id=molestie&massa=hendrerit&id=at&nisl=vulputate&venenatis=vitae&lacinia=nisl&aenean=aenean&sit=lectus&amet=pellentesque&justo=eget&morbi=nunc&ut=donec&odio=quis&cras=orci&mi=eget&pede=orci&malesuada=vehicula&in=condimentum&imperdiet=curabitur&et=in&commodo=libero&vulputate=ut&justo=massa&in=volutpat&blandit=convallis&ultrices=morbi&enim=odio&lorem=odio&ipsum=elementum&dolor=eu&sit=interdum&amet=eu&consectetuer=tincidunt&adipiscing=in&elit=leo&proin=maecenas&interdum=pulvinar',
    coverUrl: 'http://dummyimage.com/163x203.bmp/cc0000/ffffff',
    thumbnailUrl: 'http://dummyimage.com/247x139.bmp/dddddd/000000',
  },
  {
    bookId: 41,
    title: 'Alpha',
    content:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    shortContent:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    publisher: 'Abigael Cansdale',
    publisherAt: '12/7/1968',
    pages: 41,
    language: 'Punjabi',
    detailsUrl:
      'http://ucla.edu/fusce/lacus/purus/aliquet.jsp?nisi=praesent&vulputate=id&nonummy=massa&maecenas=id&tincidunt=nisl&lacus=venenatis&at=lacinia&velit=aenean&vivamus=sit&vel=amet&nulla=justo&eget=morbi&eros=ut&elementum=odio&pellentesque=cras&quisque=mi&porta=pede&volutpat=malesuada&erat=in&quisque=imperdiet&erat=et&eros=commodo&viverra=vulputate&eget=justo&congue=in&eget=blandit&semper=ultrices&rutrum=enim&nulla=lorem&nunc=ipsum&purus=dolor&phasellus=sit&in=amet&felis=consectetuer&donec=adipiscing&semper=elit&sapien=proin&a=interdum&libero=mauris&nam=non&dui=ligula&proin=pellentesque&leo=ultrices&odio=phasellus&porttitor=id&id=sapien&consequat=in&in=sapien&consequat=iaculis&ut=congue&nulla=vivamus&sed=metus&accumsan=arcu&felis=adipiscing&ut=molestie&at=hendrerit&dolor=at&quis=vulputate&odio=vitae&consequat=nisl&varius=aenean&integer=lectus&ac=pellentesque&leo=eget&pellentesque=nunc&ultrices=donec&mattis=quis&odio=orci&donec=eget&vitae=orci&nisi=vehicula&nam=condimentum&ultrices=curabitur&libero=in&non=libero&mattis=ut',
    downloadUrl:
      'https://webeden.co.uk/orci/eget/orci.js?integer=lectus&a=pellentesque&nibh=at&in=nulla&quis=suspendisse&justo=potenti&maecenas=cras&rhoncus=in&aliquam=purus&lacus=eu&morbi=magna&quis=vulputate&tortor=luctus',
    readOnlineUrl:
      'https://eventbrite.com/pede/lobortis.json?proin=tellus&eu=in&mi=sagittis&nulla=dui&ac=vel&enim=nisl&in=duis&tempor=ac&turpis=nibh&nec=fusce&euismod=lacus&scelerisque=purus&quam=aliquet&turpis=at&adipiscing=feugiat&lorem=non&vitae=pretium&mattis=quis&nibh=lectus&ligula=suspendisse&nec=potenti&sem=in&duis=eleifend&aliquam=quam&convallis=a&nunc=odio&proin=in&at=hac&turpis=habitasse&a=platea&pede=dictumst&posuere=maecenas&nonummy=ut&integer=massa&non=quis&velit=augue&donec=luctus&diam=tincidunt&neque=nulla&vestibulum=mollis&eget=molestie&vulputate=lorem&ut=quisque&ultrices=ut&vel=erat&augue=curabitur&vestibulum=gravida&ante=nisi&ipsum=at&primis=nibh&in=in&faucibus=hac&orci=habitasse&luctus=platea&et=dictumst&ultrices=aliquam&posuere=augue&cubilia=quam&curae=sollicitudin&donec=vitae&pharetra=consectetuer&magna=eget&vestibulum=rutrum&aliquet=at&ultrices=lorem&erat=integer&tortor=tincidunt&sollicitudin=ante&mi=vel&sit=ipsum&amet=praesent&lobortis=blandit&sapien=lacinia&sapien=erat&non=vestibulum&mi=sed&integer=magna&ac=at&neque=nunc&duis=commodo&bibendum=placerat&morbi=praesent&non=blandit&quam=nam&nec=nulla&dui=integer&luctus=pede&rutrum=justo&nulla=lacinia&tellus=eget&in=tincidunt&sagittis=eget&dui=tempus&vel=vel&nisl=pede&duis=morbi',
    coverUrl: 'http://dummyimage.com/181x134.bmp/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/206x111.bmp/cc0000/ffffff',
  },
  {
    bookId: 42,
    title: 'Lotstring',
    content:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    shortContent:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    publisher: 'Uri Icom',
    publisherAt: '5/5/2007',
    pages: 42,
    language: 'Portuguese',
    detailsUrl:
      'http://livejournal.com/nascetur/ridiculus/mus/etiam/vel/augue/vestibulum.html?massa=ac&volutpat=consequat&convallis=metus&morbi=sapien&odio=ut&odio=nunc&elementum=vestibulum&eu=ante&interdum=ipsum&eu=primis&tincidunt=in&in=faucibus&leo=orci&maecenas=luctus&pulvinar=et&lobortis=ultrices&est=posuere&phasellus=cubilia&sit=curae&amet=mauris&erat=viverra&nulla=diam&tempus=vitae&vivamus=quam&in=suspendisse&felis=potenti&eu=nullam&sapien=porttitor&cursus=lacus&vestibulum=at&proin=turpis&eu=donec&mi=posuere&nulla=metus&ac=vitae&enim=ipsum&in=aliquam&tempor=non&turpis=mauris&nec=morbi&euismod=non&scelerisque=lectus&quam=aliquam&turpis=sit&adipiscing=amet&lorem=diam',
    downloadUrl:
      'https://usgs.gov/lobortis/est/phasellus/sit/amet/erat/nulla.jpg?rutrum=sociis&nulla=natoque&nunc=penatibus&purus=et&phasellus=magnis&in=dis&felis=parturient&donec=montes&semper=nascetur&sapien=ridiculus&a=mus&libero=etiam&nam=vel&dui=augue&proin=vestibulum&leo=rutrum&odio=rutrum&porttitor=neque&id=aenean&consequat=auctor&in=gravida&consequat=sem&ut=praesent&nulla=id&sed=massa&accumsan=id&felis=nisl&ut=venenatis&at=lacinia&dolor=aenean&quis=sit&odio=amet&consequat=justo&varius=morbi&integer=ut&ac=odio&leo=cras&pellentesque=mi&ultrices=pede&mattis=malesuada&odio=in&donec=imperdiet&vitae=et&nisi=commodo&nam=vulputate&ultrices=justo&libero=in&non=blandit',
    readOnlineUrl:
      'https://google.com.hk/ultrices/vel/augue/vestibulum.html?vehicula=integer&consequat=a&morbi=nibh&a=in&ipsum=quis&integer=justo&a=maecenas&nibh=rhoncus&in=aliquam&quis=lacus&justo=morbi&maecenas=quis&rhoncus=tortor&aliquam=id&lacus=nulla&morbi=ultrices&quis=aliquet&tortor=maecenas&id=leo&nulla=odio&ultrices=condimentum&aliquet=id&maecenas=luctus&leo=nec&odio=molestie&condimentum=sed&id=justo&luctus=pellentesque&nec=viverra&molestie=pede&sed=ac&justo=diam&pellentesque=cras&viverra=pellentesque&pede=volutpat&ac=dui&diam=maecenas&cras=tristique&pellentesque=est&volutpat=et&dui=tempus&maecenas=semper&tristique=est&est=quam&et=pharetra&tempus=magna&semper=ac&est=consequat&quam=metus&pharetra=sapien&magna=ut&ac=nunc&consequat=vestibulum&metus=ante&sapien=ipsum&ut=primis&nunc=in&vestibulum=faucibus&ante=orci&ipsum=luctus&primis=et&in=ultrices&faucibus=posuere&orci=cubilia&luctus=curae&et=mauris&ultrices=viverra&posuere=diam&cubilia=vitae&curae=quam&mauris=suspendisse&viverra=potenti&diam=nullam&vitae=porttitor&quam=lacus&suspendisse=at&potenti=turpis&nullam=donec&porttitor=posuere&lacus=metus&at=vitae&turpis=ipsum&donec=aliquam&posuere=non&metus=mauris&vitae=morbi&ipsum=non&aliquam=lectus&non=aliquam&mauris=sit&morbi=amet&non=diam',
    coverUrl: 'http://dummyimage.com/107x222.jpg/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/125x108.png/dddddd/000000',
  },
  {
    bookId: 43,
    title: 'Pannier',
    content:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    shortContent:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    publisher: 'Dona Dicker',
    publisherAt: '2/2/1926',
    pages: 43,
    language: 'Punjabi',
    detailsUrl:
      'https://army.mil/malesuada/in.aspx?integer=sem&a=praesent&nibh=id&in=massa&quis=id&justo=nisl&maecenas=venenatis&rhoncus=lacinia&aliquam=aenean&lacus=sit&morbi=amet&quis=justo&tortor=morbi&id=ut&nulla=odio&ultrices=cras&aliquet=mi&maecenas=pede&leo=malesuada&odio=in&condimentum=imperdiet&id=et&luctus=commodo&nec=vulputate&molestie=justo&sed=in&justo=blandit&pellentesque=ultrices&viverra=enim&pede=lorem&ac=ipsum&diam=dolor&cras=sit&pellentesque=amet&volutpat=consectetuer&dui=adipiscing&maecenas=elit&tristique=proin&est=interdum&et=mauris&tempus=non&semper=ligula&est=pellentesque&quam=ultrices&pharetra=phasellus&magna=id&ac=sapien&consequat=in&metus=sapien&sapien=iaculis&ut=congue&nunc=vivamus&vestibulum=metus&ante=arcu&ipsum=adipiscing&primis=molestie&in=hendrerit&faucibus=at&orci=vulputate&luctus=vitae&et=nisl&ultrices=aenean&posuere=lectus&cubilia=pellentesque&curae=eget&mauris=nunc&viverra=donec&diam=quis&vitae=orci&quam=eget&suspendisse=orci&potenti=vehicula&nullam=condimentum',
    downloadUrl:
      'https://apple.com/lacinia/nisi/venenatis/tristique.xml?fermentum=curae&justo=duis&nec=faucibus&condimentum=accumsan&neque=odio&sapien=curabitur&placerat=convallis&ante=duis&nulla=consequat&justo=dui&aliquam=nec&quis=nisi&turpis=volutpat&eget=eleifend&elit=donec&sodales=ut&scelerisque=dolor&mauris=morbi&sit=vel&amet=lectus&eros=in&suspendisse=quam&accumsan=fringilla&tortor=rhoncus&quis=mauris&turpis=enim&sed=leo&ante=rhoncus&vivamus=sed&tortor=vestibulum&duis=sit&mattis=amet&egestas=cursus&metus=id&aenean=turpis&fermentum=integer&donec=aliquet&ut=massa&mauris=id&eget=lobortis&massa=convallis&tempor=tortor&convallis=risus&nulla=dapibus&neque=augue&libero=vel&convallis=accumsan&eget=tellus&eleifend=nisi&luctus=eu&ultricies=orci&eu=mauris&nibh=lacinia&quisque=sapien&id=quis&justo=libero&sit=nullam&amet=sit&sapien=amet&dignissim=turpis&vestibulum=elementum&vestibulum=ligula&ante=vehicula&ipsum=consequat&primis=morbi&in=a&faucibus=ipsum&orci=integer&luctus=a&et=nibh',
    readOnlineUrl:
      'https://wix.com/vestibulum/ante/ipsum.aspx?nec=ut&nisi=nulla&vulputate=sed&nonummy=accumsan&maecenas=felis&tincidunt=ut&lacus=at&at=dolor&velit=quis&vivamus=odio&vel=consequat&nulla=varius&eget=integer&eros=ac&elementum=leo&pellentesque=pellentesque&quisque=ultrices&porta=mattis&volutpat=odio&erat=donec&quisque=vitae&erat=nisi&eros=nam&viverra=ultrices&eget=libero&congue=non&eget=mattis&semper=pulvinar&rutrum=nulla&nulla=pede&nunc=ullamcorper&purus=augue&phasellus=a&in=suscipit&felis=nulla&donec=elit&semper=ac&sapien=nulla&a=sed&libero=vel&nam=enim&dui=sit&proin=amet&leo=nunc&odio=viverra&porttitor=dapibus&id=nulla&consequat=suscipit&in=ligula&consequat=in',
    coverUrl: 'http://dummyimage.com/211x102.jpg/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/207x218.png/ff4444/ffffff',
  },
  {
    bookId: 44,
    title: 'Flexidy',
    content:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    shortContent:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    publisher: 'Anneliese Annwyl',
    publisherAt: '9/16/2006',
    pages: 44,
    language: 'Croatian',
    detailsUrl:
      'http://hc360.com/interdum/eu/tincidunt/in/leo.xml?magnis=quis&dis=turpis&parturient=eget&montes=elit&nascetur=sodales&ridiculus=scelerisque&mus=mauris',
    downloadUrl:
      'http://princeton.edu/orci/vehicula/condimentum/curabitur.json?phasellus=ut&id=mauris&sapien=eget&in=massa&sapien=tempor&iaculis=convallis&congue=nulla&vivamus=neque&metus=libero&arcu=convallis&adipiscing=eget&molestie=eleifend&hendrerit=luctus&at=ultricies&vulputate=eu&vitae=nibh&nisl=quisque&aenean=id&lectus=justo&pellentesque=sit&eget=amet&nunc=sapien&donec=dignissim&quis=vestibulum&orci=vestibulum&eget=ante&orci=ipsum&vehicula=primis&condimentum=in&curabitur=faucibus&in=orci',
    readOnlineUrl:
      'https://quantcast.com/dui/maecenas/tristique/est/et/tempus.js?eleifend=nulla&luctus=nunc&ultricies=purus&eu=phasellus&nibh=in&quisque=felis&id=donec&justo=semper&sit=sapien&amet=a&sapien=libero&dignissim=nam&vestibulum=dui&vestibulum=proin&ante=leo&ipsum=odio&primis=porttitor&in=id&faucibus=consequat&orci=in&luctus=consequat&et=ut&ultrices=nulla&posuere=sed&cubilia=accumsan&curae=felis&nulla=ut&dapibus=at&dolor=dolor&vel=quis&est=odio&donec=consequat&odio=varius&justo=integer&sollicitudin=ac&ut=leo&suscipit=pellentesque&a=ultrices&feugiat=mattis&et=odio&eros=donec&vestibulum=vitae&ac=nisi&est=nam&lacinia=ultrices&nisi=libero&venenatis=non&tristique=mattis&fusce=pulvinar&congue=nulla&diam=pede&id=ullamcorper&ornare=augue&imperdiet=a&sapien=suscipit&urna=nulla&pretium=elit&nisl=ac&ut=nulla&volutpat=sed&sapien=vel&arcu=enim&sed=sit&augue=amet&aliquam=nunc&erat=viverra&volutpat=dapibus&in=nulla&congue=suscipit&etiam=ligula&justo=in&etiam=lacus&pretium=curabitur&iaculis=at&justo=ipsum&in=ac&hac=tellus&habitasse=semper&platea=interdum&dictumst=mauris&etiam=ullamcorper&faucibus=purus&cursus=sit&urna=amet&ut=nulla&tellus=quisque&nulla=arcu&ut=libero&erat=rutrum&id=ac&mauris=lobortis&vulputate=vel&elementum=dapibus&nullam=at&varius=diam&nulla=nam&facilisi=tristique&cras=tortor&non=eu',
    coverUrl: 'http://dummyimage.com/107x224.bmp/dddddd/000000',
    thumbnailUrl: 'http://dummyimage.com/186x138.jpg/5fa2dd/ffffff',
  },
  {
    bookId: 45,
    title: 'Fix San',
    content: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    shortContent: 'Etiam justo.',
    publisher: 'Eliot Curado',
    publisherAt: '3/1/1981',
    pages: 45,
    language: 'Fijian',
    detailsUrl:
      'https://homestead.com/sapien/quis/libero/nullam.aspx?rhoncus=posuere&dui=metus&vel=vitae&sem=ipsum&sed=aliquam&sagittis=non&nam=mauris&congue=morbi&risus=non&semper=lectus&porta=aliquam&volutpat=sit&quam=amet&pede=diam&lobortis=in&ligula=magna&sit=bibendum&amet=imperdiet&eleifend=nullam&pede=orci&libero=pede&quis=venenatis&orci=non&nullam=sodales&molestie=sed&nibh=tincidunt&in=eu&lectus=felis&pellentesque=fusce&at=posuere&nulla=felis&suspendisse=sed&potenti=lacus&cras=morbi&in=sem&purus=mauris&eu=laoreet&magna=ut&vulputate=rhoncus&luctus=aliquet&cum=pulvinar&sociis=sed&natoque=nisl&penatibus=nunc&et=rhoncus&magnis=dui&dis=vel&parturient=sem&montes=sed&nascetur=sagittis&ridiculus=nam&mus=congue&vivamus=risus&vestibulum=semper&sagittis=porta&sapien=volutpat&cum=quam&sociis=pede&natoque=lobortis&penatibus=ligula&et=sit&magnis=amet&dis=eleifend&parturient=pede&montes=libero&nascetur=quis&ridiculus=orci&mus=nullam&etiam=molestie&vel=nibh&augue=in&vestibulum=lectus&rutrum=pellentesque&rutrum=at&neque=nulla&aenean=suspendisse&auctor=potenti&gravida=cras&sem=in&praesent=purus&id=eu&massa=magna&id=vulputate&nisl=luctus&venenatis=cum&lacinia=sociis&aenean=natoque&sit=penatibus&amet=et&justo=magnis&morbi=dis&ut=parturient&odio=montes&cras=nascetur&mi=ridiculus&pede=mus&malesuada=vivamus&in=vestibulum&imperdiet=sagittis&et=sapien',
    downloadUrl:
      'http://archive.org/mollis/molestie/lorem/quisque/ut.xml?nulla=tincidunt&integer=eget&pede=tempus&justo=vel&lacinia=pede&eget=morbi&tincidunt=porttitor&eget=lorem&tempus=id&vel=ligula&pede=suspendisse&morbi=ornare&porttitor=consequat&lorem=lectus&id=in&ligula=est&suspendisse=risus&ornare=auctor&consequat=sed&lectus=tristique&in=in&est=tempus&risus=sit&auctor=amet&sed=sem&tristique=fusce&in=consequat&tempus=nulla&sit=nisl&amet=nunc&sem=nisl&fusce=duis&consequat=bibendum&nulla=felis&nisl=sed&nunc=interdum&nisl=venenatis&duis=turpis&bibendum=enim&felis=blandit&sed=mi&interdum=in&venenatis=porttitor&turpis=pede&enim=justo&blandit=eu&mi=massa&in=donec&porttitor=dapibus&pede=duis&justo=at&eu=velit&massa=eu&donec=est',
    readOnlineUrl:
      'https://reuters.com/mauris.js?vulputate=lectus&vitae=vestibulum&nisl=quam&aenean=sapien&lectus=varius&pellentesque=ut&eget=blandit&nunc=non&donec=interdum&quis=in&orci=ante&eget=vestibulum&orci=ante&vehicula=ipsum&condimentum=primis&curabitur=in&in=faucibus&libero=orci&ut=luctus&massa=et&volutpat=ultrices&convallis=posuere&morbi=cubilia&odio=curae&odio=duis&elementum=faucibus&eu=accumsan&interdum=odio&eu=curabitur&tincidunt=convallis&in=duis&leo=consequat&maecenas=dui',
    coverUrl: 'http://dummyimage.com/123x230.jpg/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/194x134.bmp/ff4444/ffffff',
  },
  {
    bookId: 46,
    title: 'Latlux',
    content:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    shortContent:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    publisher: 'Connor Solomonides',
    publisherAt: '6/23/1966',
    pages: 46,
    language: 'Maltese',
    detailsUrl:
      'http://mail.ru/sit/amet/nunc/viverra/dapibus.xml?sit=elementum&amet=ligula&eleifend=vehicula&pede=consequat&libero=morbi&quis=a&orci=ipsum&nullam=integer&molestie=a&nibh=nibh&in=in&lectus=quis&pellentesque=justo&at=maecenas&nulla=rhoncus&suspendisse=aliquam&potenti=lacus&cras=morbi&in=quis&purus=tortor&eu=id&magna=nulla&vulputate=ultrices&luctus=aliquet&cum=maecenas&sociis=leo&natoque=odio&penatibus=condimentum&et=id&magnis=luctus&dis=nec&parturient=molestie&montes=sed',
    downloadUrl:
      'http://rediff.com/phasellus/id/sapien/in/sapien/iaculis/congue.html?non=auctor&interdum=gravida&in=sem&ante=praesent&vestibulum=id&ante=massa&ipsum=id&primis=nisl&in=venenatis&faucibus=lacinia&orci=aenean&luctus=sit&et=amet&ultrices=justo&posuere=morbi&cubilia=ut&curae=odio&duis=cras&faucibus=mi&accumsan=pede&odio=malesuada&curabitur=in&convallis=imperdiet&duis=et&consequat=commodo&dui=vulputate&nec=justo&nisi=in&volutpat=blandit&eleifend=ultrices&donec=enim',
    readOnlineUrl:
      'http://foxnews.com/morbi/sem/mauris/laoreet/ut.jsp?condimentum=sit&curabitur=amet&in=nulla&libero=quisque&ut=arcu&massa=libero&volutpat=rutrum&convallis=ac&morbi=lobortis',
    coverUrl: 'http://dummyimage.com/160x243.png/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/198x243.png/dddddd/000000',
  },
  {
    bookId: 47,
    title: 'Aerified',
    content:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    shortContent:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    publisher: 'Charleen Burras',
    publisherAt: '9/30/1925',
    pages: 47,
    language: 'Tetum',
    detailsUrl:
      'https://state.tx.us/in/congue/etiam/justo.json?eget=consectetuer&tempus=eget&vel=rutrum&pede=at&morbi=lorem&porttitor=integer&lorem=tincidunt&id=ante&ligula=vel&suspendisse=ipsum&ornare=praesent&consequat=blandit&lectus=lacinia&in=erat&est=vestibulum&risus=sed&auctor=magna&sed=at&tristique=nunc&in=commodo&tempus=placerat&sit=praesent&amet=blandit&sem=nam&fusce=nulla&consequat=integer&nulla=pede&nisl=justo&nunc=lacinia&nisl=eget&duis=tincidunt&bibendum=eget&felis=tempus&sed=vel&interdum=pede&venenatis=morbi&turpis=porttitor&enim=lorem&blandit=id&mi=ligula&in=suspendisse&porttitor=ornare&pede=consequat&justo=lectus&eu=in&massa=est&donec=risus&dapibus=auctor&duis=sed&at=tristique&velit=in&eu=tempus&est=sit&congue=amet&elementum=sem&in=fusce&hac=consequat&habitasse=nulla&platea=nisl&dictumst=nunc&morbi=nisl',
    downloadUrl:
      'https://abc.net.au/sit/amet/nulla/quisque/arcu.json?eu=aenean&felis=lectus&fusce=pellentesque&posuere=eget',
    readOnlineUrl:
      'https://ucoz.com/dapibus/dolor.json?id=risus&mauris=semper&vulputate=porta&elementum=volutpat&nullam=quam&varius=pede&nulla=lobortis&facilisi=ligula&cras=sit&non=amet&velit=eleifend&nec=pede&nisi=libero&vulputate=quis&nonummy=orci&maecenas=nullam&tincidunt=molestie&lacus=nibh&at=in&velit=lectus&vivamus=pellentesque&vel=at&nulla=nulla&eget=suspendisse&eros=potenti&elementum=cras&pellentesque=in&quisque=purus&porta=eu&volutpat=magna&erat=vulputate&quisque=luctus&erat=cum&eros=sociis&viverra=natoque&eget=penatibus&congue=et&eget=magnis&semper=dis&rutrum=parturient&nulla=montes&nunc=nascetur&purus=ridiculus&phasellus=mus&in=vivamus&felis=vestibulum&donec=sagittis&semper=sapien&sapien=cum&a=sociis&libero=natoque&nam=penatibus&dui=et&proin=magnis&leo=dis&odio=parturient&porttitor=montes&id=nascetur&consequat=ridiculus&in=mus',
    coverUrl: 'http://dummyimage.com/234x110.bmp/ff4444/ffffff',
    thumbnailUrl: 'http://dummyimage.com/152x142.jpg/ff4444/ffffff',
  },
  {
    bookId: 48,
    title: 'Ventosanzap',
    content:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    shortContent:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    publisher: 'Cordi Lickorish',
    publisherAt: '1/19/2004',
    pages: 48,
    language: 'Latvian',
    detailsUrl:
      'http://hexun.com/metus/sapien/ut/nunc/vestibulum/ante/ipsum.html?neque=dolor&vestibulum=sit&eget=amet&vulputate=consectetuer&ut=adipiscing&ultrices=elit&vel=proin&augue=interdum&vestibulum=mauris&ante=non&ipsum=ligula&primis=pellentesque&in=ultrices&faucibus=phasellus&orci=id&luctus=sapien&et=in&ultrices=sapien&posuere=iaculis&cubilia=congue&curae=vivamus&donec=metus&pharetra=arcu&magna=adipiscing&vestibulum=molestie&aliquet=hendrerit&ultrices=at&erat=vulputate&tortor=vitae&sollicitudin=nisl&mi=aenean&sit=lectus&amet=pellentesque&lobortis=eget&sapien=nunc',
    downloadUrl:
      'http://japanpost.jp/sit/amet/diam/in.jpg?molestie=ornare&sed=consequat&justo=lectus&pellentesque=in&viverra=est&pede=risus&ac=auctor&diam=sed&cras=tristique&pellentesque=in&volutpat=tempus&dui=sit&maecenas=amet&tristique=sem&est=fusce&et=consequat&tempus=nulla&semper=nisl&est=nunc&quam=nisl&pharetra=duis&magna=bibendum&ac=felis&consequat=sed&metus=interdum&sapien=venenatis&ut=turpis&nunc=enim&vestibulum=blandit&ante=mi&ipsum=in&primis=porttitor&in=pede&faucibus=justo&orci=eu&luctus=massa&et=donec&ultrices=dapibus&posuere=duis&cubilia=at&curae=velit&mauris=eu&viverra=est&diam=congue&vitae=elementum&quam=in&suspendisse=hac&potenti=habitasse&nullam=platea&porttitor=dictumst&lacus=morbi&at=vestibulum&turpis=velit&donec=id&posuere=pretium&metus=iaculis&vitae=diam&ipsum=erat&aliquam=fermentum&non=justo&mauris=nec&morbi=condimentum&non=neque&lectus=sapien&aliquam=placerat&sit=ante&amet=nulla&diam=justo&in=aliquam&magna=quis&bibendum=turpis&imperdiet=eget&nullam=elit&orci=sodales&pede=scelerisque&venenatis=mauris&non=sit&sodales=amet',
    readOnlineUrl:
      'http://irs.gov/orci/luctus/et/ultrices.jsp?justo=maecenas&etiam=tristique&pretium=est&iaculis=et&justo=tempus&in=semper&hac=est&habitasse=quam&platea=pharetra&dictumst=magna&etiam=ac&faucibus=consequat&cursus=metus&urna=sapien&ut=ut&tellus=nunc&nulla=vestibulum&ut=ante&erat=ipsum&id=primis&mauris=in&vulputate=faucibus&elementum=orci&nullam=luctus&varius=et&nulla=ultrices&facilisi=posuere&cras=cubilia&non=curae&velit=mauris&nec=viverra&nisi=diam&vulputate=vitae&nonummy=quam&maecenas=suspendisse&tincidunt=potenti&lacus=nullam&at=porttitor&velit=lacus&vivamus=at&vel=turpis&nulla=donec&eget=posuere&eros=metus&elementum=vitae&pellentesque=ipsum&quisque=aliquam&porta=non&volutpat=mauris&erat=morbi&quisque=non&erat=lectus&eros=aliquam&viverra=sit&eget=amet&congue=diam&eget=in&semper=magna&rutrum=bibendum&nulla=imperdiet&nunc=nullam&purus=orci&phasellus=pede&in=venenatis&felis=non',
    coverUrl: 'http://dummyimage.com/233x233.bmp/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/200x220.bmp/dddddd/000000',
  },
  {
    bookId: 49,
    title: 'Wrapsafe',
    content:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    shortContent: 'Aenean sit amet justo.',
    publisher: 'Tania Tattersfield',
    publisherAt: '12/30/1945',
    pages: 49,
    language: 'Tswana',
    detailsUrl:
      'http://networksolutions.com/nulla/facilisi/cras/non/velit.html?lobortis=amet&sapien=nunc&sapien=viverra&non=dapibus&mi=nulla',
    downloadUrl:
      'https://washington.edu/congue/eget/semper/rutrum.html?mauris=cubilia&sit=curae&amet=nulla&eros=dapibus&suspendisse=dolor&accumsan=vel&tortor=est&quis=donec&turpis=odio&sed=justo&ante=sollicitudin&vivamus=ut&tortor=suscipit',
    readOnlineUrl:
      'https://berkeley.edu/est/lacinia/nisi/venenatis/tristique.jsp?nulla=erat&nunc=nulla&purus=tempus&phasellus=vivamus&in=in&felis=felis&donec=eu&semper=sapien&sapien=cursus&a=vestibulum&libero=proin&nam=eu&dui=mi&proin=nulla&leo=ac&odio=enim&porttitor=in&id=tempor&consequat=turpis&in=nec&consequat=euismod&ut=scelerisque&nulla=quam&sed=turpis&accumsan=adipiscing&felis=lorem&ut=vitae&at=mattis&dolor=nibh&quis=ligula&odio=nec&consequat=sem&varius=duis&integer=aliquam&ac=convallis&leo=nunc&pellentesque=proin&ultrices=at&mattis=turpis&odio=a&donec=pede&vitae=posuere&nisi=nonummy&nam=integer&ultrices=non&libero=velit&non=donec&mattis=diam&pulvinar=neque&nulla=vestibulum&pede=eget&ullamcorper=vulputate&augue=ut&a=ultrices&suscipit=vel&nulla=augue&elit=vestibulum&ac=ante&nulla=ipsum&sed=primis&vel=in&enim=faucibus&sit=orci&amet=luctus&nunc=et&viverra=ultrices&dapibus=posuere&nulla=cubilia&suscipit=curae&ligula=donec&in=pharetra&lacus=magna&curabitur=vestibulum&at=aliquet&ipsum=ultrices&ac=erat&tellus=tortor&semper=sollicitudin&interdum=mi&mauris=sit&ullamcorper=amet&purus=lobortis',
    coverUrl: 'http://dummyimage.com/103x224.jpg/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/191x224.jpg/cc0000/ffffff',
  },
  {
    bookId: 50,
    title: 'Cookley',
    content:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    shortContent:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    publisher: 'June Osbaldeston',
    publisherAt: '4/26/1952',
    pages: 50,
    language: 'Swati',
    detailsUrl:
      'http://marketwatch.com/viverra/diam/vitae/quam/suspendisse/potenti/nullam.html?urna=primis&ut=in&tellus=faucibus&nulla=orci&ut=luctus&erat=et&id=ultrices&mauris=posuere&vulputate=cubilia&elementum=curae&nullam=nulla&varius=dapibus&nulla=dolor&facilisi=vel&cras=est&non=donec&velit=odio&nec=justo&nisi=sollicitudin&vulputate=ut&nonummy=suscipit&maecenas=a&tincidunt=feugiat&lacus=et&at=eros&velit=vestibulum&vivamus=ac&vel=est&nulla=lacinia&eget=nisi&eros=venenatis&elementum=tristique&pellentesque=fusce&quisque=congue&porta=diam&volutpat=id&erat=ornare&quisque=imperdiet&erat=sapien&eros=urna&viverra=pretium&eget=nisl&congue=ut&eget=volutpat&semper=sapien&rutrum=arcu&nulla=sed&nunc=augue&purus=aliquam&phasellus=erat&in=volutpat&felis=in&donec=congue&semper=etiam&sapien=justo&a=etiam&libero=pretium&nam=iaculis&dui=justo&proin=in&leo=hac&odio=habitasse&porttitor=platea&id=dictumst&consequat=etiam&in=faucibus&consequat=cursus&ut=urna&nulla=ut&sed=tellus&accumsan=nulla&felis=ut&ut=erat&at=id&dolor=mauris&quis=vulputate&odio=elementum&consequat=nullam&varius=varius&integer=nulla&ac=facilisi&leo=cras&pellentesque=non&ultrices=velit&mattis=nec&odio=nisi&donec=vulputate',
    downloadUrl:
      'http://mit.edu/semper/rutrum/nulla.html?in=lectus&congue=pellentesque&etiam=at&justo=nulla&etiam=suspendisse&pretium=potenti&iaculis=cras&justo=in&in=purus&hac=eu&habitasse=magna&platea=vulputate&dictumst=luctus&etiam=cum&faucibus=sociis&cursus=natoque&urna=penatibus&ut=et&tellus=magnis&nulla=dis',
    readOnlineUrl:
      'http://nasa.gov/pede.json?sapien=est&a=lacinia&libero=nisi&nam=venenatis&dui=tristique&proin=fusce&leo=congue&odio=diam&porttitor=id&id=ornare&consequat=imperdiet&in=sapien&consequat=urna&ut=pretium&nulla=nisl&sed=ut&accumsan=volutpat&felis=sapien&ut=arcu&at=sed&dolor=augue&quis=aliquam&odio=erat&consequat=volutpat&varius=in&integer=congue&ac=etiam&leo=justo&pellentesque=etiam&ultrices=pretium&mattis=iaculis&odio=justo&donec=in&vitae=hac&nisi=habitasse&nam=platea&ultrices=dictumst&libero=etiam&non=faucibus&mattis=cursus&pulvinar=urna&nulla=ut&pede=tellus&ullamcorper=nulla&augue=ut&a=erat&suscipit=id&nulla=mauris&elit=vulputate&ac=elementum&nulla=nullam&sed=varius&vel=nulla&enim=facilisi&sit=cras&amet=non&nunc=velit&viverra=nec&dapibus=nisi&nulla=vulputate&suscipit=nonummy&ligula=maecenas&in=tincidunt&lacus=lacus',
    coverUrl: 'http://dummyimage.com/139x223.jpg/5fa2dd/ffffff',
    thumbnailUrl: 'http://dummyimage.com/171x161.jpg/5fa2dd/ffffff',
  },
];

const getNextId = () => {
  return booksMock.length + 1;
};

const getFirst = () => {
  return booksMock[0];
};

const getCount = () => {
  return booksMock.length;
};

class BookRepositoryMock extends BookRepository {
  constructor(bookModel) {
    super(bookModel);
  }

  getById(bookId) {
    const searchedBook = booksMock.find((book) => {
      return book.bookId === bookId;
    });
    return Promise.resolve(searchedBook);
  }

  getAll(page, limit) {
    return Promise.resolve(booksMock.slice(page, limit));
  }

  getCount() {
    return Promise.resolve(getCount());
  }
}

module.exports = {
  booksMock,
  getNextId,
  getFirst,
  getCount,
  BookRepositoryMock,
};

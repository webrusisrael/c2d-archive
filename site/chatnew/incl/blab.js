iev=0; div_toscroll=0; lock_autoscroll=0; arr_ignore=new Array('0'); txt_b=0; txt_i=0; txt_c=999; tmp_j=''; hocus=1;
proom=0; chat_lid=-1; pchats=0; online_hash='0'; chat_post=''; chatto=0; cto_name=''; tempto=0; tto_name=''; s_msg=new Array();
history_p=20*60; history_f=0; js_flood=0; jfr='<iframe name="ifr" style="display:none"></iframe>'; sess_snd=1;
htto=new Array(); mmc=1; maplink='';aud_em=document.createElement("audio");aud_ok=!!aud_em["canPlayType"];

tit_a=document.title.toString();tit_b='* '+tit_a;

tmp_a=0; // object [ajx]
tmp_d=0; // object [opa]
tmp_o=0; // opa X
tmp_s=1; // opa direction

if(mview<1){
sw1=new Image();sw1.src=skin_dir+'/images/status_a.png';
sw2=new Image();sw2.src=skin_dir+'/images/status_i.png';
sw3=new Image();sw3.src=skin_dir+'/images/status_m.png';
sw4=new Image();sw4.src=skin_dir+'/images/status_o.png';}


if(typeof window.external=='object' && typeof document.all=='object'){
iev=navigator.userAgent;iev=iev.split('MSIE');iev=parseInt(iev[1]);if(iev<7){effe=0;
document.write('<link rel="stylesheet" type="text/css" href="'+skin_dir+'/msie.css" />');}}


function go(x){window.location=x;}
function go_dnd(x){window.open('download.php?q='+x)}
function op(m,n){if(iev>1){m.style.filter='alpha(opacity='+n*10+')';}else{m.style.opacity=n/10;}return false}


function set_ie6size(){
close_l();close_p();
x=document.body.clientHeight-iec1;
y=document.body.clientHeight-iec2;
if(iev>0 && iev<7){
document.getElementById('blab_onll').style.height=x+'px';
document.getElementById('blab_chat').style.height=y+'px';}
if(lock_autoscroll==0){document.getElementById('blab_chat').scrollTop=9999999;}}

function set_ie6s2ze(){
x=document.body.clientHeight-iec3;
if(iev>0 && iev<7){document.getElementById('blab_pcha').style.height=x+'px';}
if(lock_autoscroll==0){document.getElementById('blab_pcha').scrollTop=9999999;}}


function ad_emo(w){v=document.getElementById('ln');v.value=v.value+ ' '+w+' ';if(mview<1){v.focus();}}


function set_opa(a,b){
if(effe<1 || iev>0){
if(b>0){document.getElementById(a).style.display='block';document.getElementById(a).style.visibility='inherit'}else{document.getElementById(a).style.display='none'}}
else{
if(typeof opad=='number' && typeof tmp_d=='object'){
clearInterval(opad);tmp_d.style.opacity=1;if(tmp_s>0 && tmp_d.style.display!='none'){tmp_d.style.display='block'}else{tmp_d.style.display='none'}
}
tmp_d=document.getElementById(a);
tmp_d.style.display='block';tmp_d.style.visibility='visible';
if(b>0){tmp_d.style.opacity=0;tmp_o=0;  tmp_s=1;opad=setInterval('do_opa()',10);}
else{tmp_d.style.opacity=1;tmp_o=100;tmp_s=0;opad=setInterval('do_opa()',10);}
}}


function do_opa(){
if(tmp_s>0){tmp_o+=5;j=tmp_o/100;tmp_d.style.opacity=j
if(tmp_o>=100){clearInterval(opad);}}
else{   tmp_o-=5;j=tmp_o/100;tmp_d.style.opacity=j
if(tmp_o<=0){clearInterval(opad);tmp_d.style.display='none';}
}}


function change_room(a,b,c){
proom=room; room=a; rhash=b;
document.getElementById('room_name').innerHTML=c;
document.getElementById('blab_chat').innerHTML='';
close_p(); chat_lid=-1; online_hash='0';
clearInterval(brc); mmc=1; s_msg=new Array(); s_chat(); proom=0;
brc=setInterval('s_chat()',ajax_update*1000);
}

function play_s(x){if(x>0){
if(aud_ok){x=skin_dir+'/sounds/o'+x+'.ogg';
audio=new Audio(x);audio.play();}
else{x=skin_dir+'/sounds/s'+x+'.swf';
document.getElementById('sn').innerHTML='';
ssr='<object data="'+x+'" type="application/x-shockwave-flash" width="1" height="1" style="position:absolute;left:0px;top:0px;visibility:hidden"><param name="movie" value="'+x+'" /><param name="menu" value="false" /><param name="quality" value="high" /></object>';
document.getElementById('sn').innerHTML=ssr;}}}


function http_obj(){
if(typeof window.external=='object' && typeof document.all=='object'){
r=new ActiveXObject("Microsoft.XMLHTTP")}
else{r=new XMLHttpRequest()}return r}


function scrll(m){
if(div_toscroll<1){dv=document.getElementById('blab_chat');
if(lock_autoscroll<1 && (m==38 || m==40)){close_l();set_opa('blab_ascr',1);lock_autoscroll=1;}}
else{dv=document.getElementById('blab_onll')}
if(m==38){dv.scrollTop-=15} if(m==40){dv.scrollTop+=15}}


function scrll2(m){
if(div_toscroll<1){dv=document.getElementById('blab_chat');
if(lock_autoscroll<1){close_l();set_opa('blab_ascr',1);lock_autoscroll=1;}}
else{dv=document.getElementById('blab_onll')}
if(m>0){dv.scrollTop-=15}else{dv.scrollTop+=15}}


function hide_o(x){
if(x<1){close_r();
document.getElementById('blab_onll').style.display='none';
document.getElementById('blab_onlb').style.display='block';
document.getElementById('blab_onlt').style.display='none';
document.getElementById('blab_chat').style.width='95%';}
else{if(mview>0){ws='98%';}else{ws='78%';}
document.getElementById('blab_onll').style.display='block';
document.getElementById('blab_onlb').style.display='none';
document.getElementById('blab_onlt').style.display='block';
document.getElementById('blab_chat').style.width=ws;}
if(mview<1){setTimeout('dv2scrll(0)',10);}
document.getElementById('blab_chat').scrollTop=9999999;}


function dv2scrll(x){
div_toscroll=x; if(x<1){
document.getElementById('arri1').style.display='block';
document.getElementById('arri2').style.display='none';}
else{
document.getElementById('arri1').style.display='none';
document.getElementById('arri2').style.display='block';}}


function change_stat(a,b){
if(document.getElementById('meo')){
switch(a){
case 2: my_status=2;
document.getElementById('meo').style.display='none';
document.getElementById('mea').style.display='inline';
document.getElementById('mei').style.display='none';break;
case 3: my_status=3;
document.getElementById('meo').style.display='none';
document.getElementById('mea').style.display='none';
document.getElementById('mei').style.display='inline';break;
default: my_status=usm_status;
document.getElementById('meo').style.display='inline';
document.getElementById('mea').style.display='none';
document.getElementById('mei').style.display='none';break;}}
if(b>0){clearInterval(brc); mmc=1; s_chat(); brc=setInterval('s_chat()',ajax_update*1000);}}


function s_chat(){
mmc++;htto[mmc]=http_obj();ignore=arr_ignore.toString();
s='uid='+uid+'&uname='+uname+'&pps='+pps+'&uhash='+uhash+'&chat_lid='+chat_lid+'&online_hash='+online_hash+'&room='+room+'&rhash='+rhash+'&proom='+proom+'&status='+my_status+'&zone='+zone+'&tfrm='+tfrm+'&chatto='+chatto+'&cto_name='+cto_name+'&ignore='+ignore+'&txt_b='+txt_b+'&txt_i='+txt_i+'&txt_c='+txt_c+'&cc='+cc;
if(chat_post.length>0){
amp=/&/g;chat_post=chat_post.replace(amp,'%26');
pl=/\+/g;chat_post=chat_post.replace(pl,'%2B');
s=s+'&cp='+chat_post;chat_post='';}
htto[mmc].open('post','ajb.php');
htto[mmc].setRequestHeader('Content-Type','application/x-www-form-urlencoded');
htto[mmc].onreadystatechange=function(){r_chat(mmc)};htto[mmc].send(s);
if(debug>0){tt1=new Date();tt1=parseInt(tt1.getTime());}}


function r_chat(x){
if(htto[x].readyState==4 && x==mmc){
bcdiv=document.getElementById('blab_chat');
splay=false; r=htto[x].responseText.toString();
r=r.split('|:|');
if(r[7]){r[7]=parseInt(r[7]);if(r[7]>0){s_msg=new Array();bcdiv.innerHTML='';splay=snd3;}}
if(r[5]){
if(r[1].length>0){document.getElementById('blab_onll').innerHTML=r[1];online_hash=r[5];if(!splay){splay=snd2;}}
if(r[0].length>0){rxx=check_msg(r[0]);
dv1s='kk'+chat_lid;if(iev<1 && document.getElementById(dv1s)){dv1s=document.getElementById(dv1s);dv1s.style.opacity=1;}
dv2s='kk'+r[3];rxx='<div id="'+dv2s+'" style="visibility:hidden">'+rxx+'</div>';
bcdiv.innerHTML+=rxx;if(!splay || splay==snd2){splay=snd1;};setTimeout("set_opa(dv2s,1)",50);}
if(lock_autoscroll==0){lock_autoscroll=1; setTimeout('bcdiv.scrollTop=9999999',10); setTimeout('lock_autoscroll=0',100);}
if(r[2]>pchats){splay=snd3;if(chat_lid>=0){close_l();}
document.getElementById('blab_pcht').style.display='block';}
document.getElementById('pcht_num').innerHTML=r[2];pchats=r[2];
if(pchats<1){document.getElementById('blab_pcht').style.display='none';}
if(r[3]>0){chat_lid=r[3];}
if(splay && splay!=snd2 && hocus<1){document.title=tit_b;}
if(splay && sess_snd>0){play_s(splay);}}
if(r[4]=='1'){window.location='info.php?wttp=fldd';}
if(r[4]=='2'){window.location='info.php?wttp=warn';}
if(r[4]=='3'){window.location='info.php?wttp=bann';}
if(r[6] && debug>0){
tt2=new Date();tt2=parseInt(tt2.getTime());tt2=(tt2-tt1)/1000;tt2=tt2.toString()+'000';tt2=tt2.substr(0,5);
document.getElementById('debug').innerHTML=r[6]+'s ('+tt2+'s)';}
}}

function sp_chat(){
mmc++;htto[mmc]=http_obj();
s='uid='+uid+'&uname='+uname+'&uhash='+uhash+'&chat_lid='+chat_lid+'&zone='+zone+'&pps='+pps+'&tfrm='+tfrm+'&chatto='+chatto+'&txt_b='+txt_b+'&txt_i='+txt_i+'&txt_c='+txt_c;
if(chat_post.length>0){
amp=/&/g;chat_post=chat_post.replace(amp,'%26');
pl=/\+/g;chat_post=chat_post.replace(pl,'%2B');
s=s+'&cp='+chat_post;chat_post='';}
htto[mmc].open('post','ajp.php');
htto[mmc].setRequestHeader('Content-Type','application/x-www-form-urlencoded');
htto[mmc].onreadystatechange=function(){rp_chat(mmc)};htto[mmc].send(s);
}

function rp_chat(x){
if(htto[x].readyState==4 && x==mmc){
bcdiv=document.getElementById('blab_pcha');
splay=false; r=htto[x].responseText.toString();
r=r.split('|:|');
if(parseInt(r[3])>0){self.close()}
if(r[2]){
if(r[1].length>0){document.title=r[1]+' ('+chat_inf2+')';document.getElementById('blab_pin').innerHTML=chat_inf2+': '+r[1]}
else{document.title=chat_inf1;document.getElementById('blab_pin').innerHTML=chat_inf1;}
if(r[0].length>0){rxx=check_msg(r[0]);
dv1s='kk'+chat_lid;if(iev<1 && document.getElementById(dv1s)){dv1s=document.getElementById(dv1s);dv1s.style.opacity=1;}
dv2s='kk'+r[2];rxx='<div id="'+dv2s+'" style="visibility:hidden">'+rxx+'</div>';
bcdiv.innerHTML+=rxx;splay=snd4;setTimeout("set_opa(dv2s,1)",50);}
if(lock_autoscroll==0){lock_autoscroll=1; setTimeout('bcdiv.scrollTop=9999999',10); setTimeout('lock_autoscroll=0',100);}
if(r[2]>0){chat_lid=r[2];}
if(splay && sess_snd>0){play_s(splay);}
}}}


function check_msg(x){
z='';x=x.split('</div>');
for(i=0;i<x.length-1;i++){
y=x[i].split(':|:');
y[0]=parseInt(y[0],10);
if(!s_msg[y[0]] && y[1]){
s_msg[y[0]]=true;
y[1]=y[1]+'</div>';
z+=y[1];}}return z;}


function pat(x){
ctxt=document.getElementById('ln').value;
document.getElementById('ln').value='‹@'+x+'› '+ctxt;
document.getElementById('ln').focus();}


function count_txt(a,b){
c=a.value.length; if(c>b){a.value=a.value.substr(0,b)}}


function force_dr(x){
if(chat_post.length>0){
if(js_flood>0 && x>0){chat_post='';document.getElementById('jtbl').style.display='none';document.getElementById('blab_itbl').style.display='block';}
else{clearInterval(brc);
if(x>0){change_stat(1,0);document.getElementById('ln').value='';
if(document.getElementById('jtbl').style.visibility!='hidden'){if(mview<1){document.getElementById('ln').focus();}}
js_flood=1;setTimeout('js_flood=0',post_interv);}
mmc=1;s_chat();brc=setInterval('s_chat()',ajax_update*1000);
}}}


function force_pr(){
if(chat_post.length>0){
if(js_flood>0){chat_post='';document.getElementById('jtbl').style.display='none';document.getElementById('blab_itbl').style.display='block';}
else{clearInterval(brc);mmc=1;sp_chat();
brc=setInterval('sp_chat()',ajax_update*1000);
document.getElementById('ln').value='';
if(document.getElementById('jtbl').style.visibility!='hidden'){if(mview<1){document.getElementById('ln').focus();}}
js_flood=1;setTimeout('js_flood=0',post_interv);}
}}


function uu(x,y,z){close_r();
if(mview<1){setTimeout('dv2scrll(0)',10);}
document.getElementById('blab_usr2').innerHTML='';
tempto=x;ign_t(x);tto_name=y;set_opa('blab_usr1',1);
load_ajc('blab_usr2','user.php','uid='+x+'&cc='+z,'','');
if(document.getElementById('ktbl').style.visibility!='hidden'){
document.getElementById('pm').value='';
setTimeout("if(mview<1){document.getElementById('pm').focus()}",1000);}}


function close_l(){
document.getElementById('blab_scrh').style.display='none';
document.getElementById('blab_smilies').style.display='none';
document.getElementById('blab_colours').style.display='none';
document.getElementById('blab_myfiles').style.display='none';
document.getElementById('blab_stat1').style.display='none';
document.getElementById('blab_stat2').innerHTML='';
document.getElementById('blab_paint1').style.display='none';
document.getElementById('blab_ppnt1').style.display='none';
document.getElementById('blab_ppnt2').innerHTML='';
}


function close_r(){
document.getElementById('blab_usr1').style.display='none';
document.getElementById('blab_usr2').innerHTML='';
document.getElementById('blab_vdo1').style.display='none';
document.getElementById('blab_vdo2').innerHTML='';
document.getElementById('blab_map1').style.display='none';
document.getElementById('blab_map2').innerHTML='';
}

function close_p(){
if(document.getElementById('bd')){
dd=document.getElementById('bd'); reset_panel();
document.getElementById('blab_panel').style.display='none';
if(effe>0){if(iev>1){dd.style.filter='alpha(opacity=100)';}dd.style.opacity='1';}
else{dd.style.visibility='visible';}
document.getElementById('blab_chat').scrollTop=9999999;
}}


function ign_t(x){
if(document.getElementById('iugn')){lng=lng_ignore;
for(i=0;i<arr_ignore.length;i++){if(arr_ignore[i]==x){lng=lng_unignore}}
document.getElementById('iugn').innerHTML=lng;}}


function ign_u(x){pss=false;
p=document.getElementById('iugn');
for(i=0;i<arr_ignore.length;i++){if(arr_ignore[i]==x){pss=i}}
if(!pss){arr_ignore.splice(1,0,x);p.innerHTML=lng_unignore;}
else{arr_ignore.splice(pss,1);p.innerHTML=lng_ignore;}}


function txt_swap(x,y){
a=document.getElementById('ln');
b=false;if(document.getElementById('pm')){b=document.getElementById('pm');}

if(x==0){if(txt_b==1){txt_b=0;y.className='blab_bicn';a.style.fontWeight='normal';if(b){b.style.fontWeight='normal';}}
else{txt_b=1;y.className='blab_bica';a.style.fontWeight='bold';if(b){b.style.fontWeight='bold';}}}

if(x==1){if(txt_i==1){txt_i=0;y.className='blab_bicn';a.style.fontStyle='normal';if(b){b.style.fontStyle='normal';}}
else{txt_i=1;y.className='blab_bica';a.style.fontStyle='italic';if(b){b.style.fontStyle='italic';}}}
if(mview<1){a.focus();}}


function pick_c(n,c,o){
a=document.getElementById('ln');
b=false;if(document.getElementById('pm')){b=document.getElementById('pm');}
document.getElementById('clr').style.borderColor='#'+c;
a.style.color='#'+c; if(b){b.style.color='#'+c;} txt_c=n;
if(o==1){set_opa('blab_colours',0);}
if(mview<1){a.focus();}}


function load_panel(x){
close_l();close_r();reset_panel();
document.getElementById('mnu_rooms').style.display='none';
document.getElementById('mnu_panels').style.display='none';
document.getElementById('mnu_history').style.display='none';
document.getElementById('mnu_geoloc').style.display='none';
if(x==0){document.getElementById('mnu_rooms').style.display='block';}
if(x==1){document.getElementById('mnu_panels').style.display='block';}
if(x==2){document.getElementById('mnu_history').style.display='block';}
if(x==3){document.getElementById('mnu_geoloc').style.display='block';}
pn=document.getElementById('blab_panel'); pw=parseInt(pn.style.width);
if(!document.documentElement.clientWidth>0){dw=document.body.clientWidth}else{dw=document.documentElement.clientWidth;}
if(!document.documentElement.clientHeight>0){dh=document.body.clientHeight}else{dh=document.documentElement.clientHeight;}
pw=(dw-pw)/2;ph=(dh-350)/2; if(mview>0){ph=0;pw=0;} pn.style.left=pw+'px'; pn.style.top=ph+'px';

dd=document.getElementById('bd');
if(effe>0){if(iev>1){dd.style.filter='alpha(opacity=10)';}dd.style.opacity='0.1';}
else{dd.style.visibility='hidden';}
set_opa('blab_panel',1);}

function reset_panel(){
document.getElementById('panel_mid').innerHTML='<div class="panel_lod"></div>';
}

function load_ajc(x,y,z,j,t){
tmp_a=x; httu=http_obj(); httu.open('post',y); tmp_j=j;
httu.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
httu.onreadystatechange=disp_ajc;httu.send(z);setTimeout('tmp_j=""',5000);
temp_message=t;}

function seed_rand(x){
y=Math.floor(Math.random()*x+1261737);
return y;}

function disp_ajc(){
if(httu.readyState==4){
o=document.getElementById(tmp_a);
rst=httu.responseText.toString();
if(rst.length>1){o.innerHTML=rst;}else{o.innerHTML=temp_message}
eval(tmp_j);tmp_j='';}}

function show_stat(){
close_l();set_opa('blab_stat1',1);
document.getElementById('blab_stat2').innerHTML='<iframe src="stati.php" scrolling="no" frameborder="0" style="margin:0px;padding:0px;width:330px;height:290px;border-width:0px;overflow:hidden"></iframe>';
}

function show_paint(){
if(mview<1){close_l();set_opa('blab_paint1',1);
if(document.getElementById('blab_paint2').innerHTML==''){
document.getElementById('blab_paint2').innerHTML='<iframe src="p_paint.php" scrolling="no" frameborder="0" style="margin:0px;padding:0px;width:400px;height:260px;border-width:0px;overflow:hidden"></iframe>';
}}}

function play_p(x){
if(mview<1){close_r(); close_l(); close_p(); set_opa('blab_ppnt1',1); x=parseInt(x);
ee='<iframe src="p_play.php?q='+x+'" scrolling="no" frameborder="0" style="width:400px;height:225px;border-width:0px;overflow:hidden"></iframe>';
setTimeout("document.getElementById('blab_ppnt2').innerHTML=ee",200);
}}

function show_vdo(m){
close_r(); close_l();  close_p(); set_opa('blab_vdo1',1);
sX=360;sY=300;vsrc=skin_dir+'/novid.swf';

if(m.indexOf('youtube.com/watch?v=')!=-1){vsrc=m.split('&');vsrc=vsrc[0];vsrc=m.split('youtube.com/watch?v=');vsrc='http://youtube.com/v/'+vsrc[1]}
if(m.indexOf('metacafe.com/watch/')!=-1){vsrc=m.split('metacafe.com/watch/');vsrc='http://www.metacafe.com/fplayer/'+vsrc[1];vsrc=vsrc.substr(0,vsrc.length-1)+'.swf'}

vsrc='<object style="width:'+sX+'px;height:'+sY+'px" type="application/x-shockwave-flash" data="'+vsrc+'"><param name="movie" value="'+vsrc+'" /></object>';
document.getElementById('blab_vdo2').innerHTML=vsrc;}

function go_map(x){
close_r(); close_p(); set_opa('blab_map1',1); maplink='http://maps.google.com/?q='+x;
document.getElementById('blab_map2').innerHTML='<iframe src="map.php?q='+x+'" scrolling="no" frameborder="0" style="width:360px;height:300px;border-width:0px;overflow:hidden"></iframe>';
}

function show_help(x){
if(typeof a=='object'){set_opa(x,1)}
return false}

function help_all(x){
for(i=0;i < 100;i++){
j='s'+i
a=document.getElementById(j)
if(typeof a=='object' && a!=null){
if(x==0){a.style.display='none'}
else{a.style.display='block'}
}}return false}

function process_pchat(x,r,z){
if(r<4){
if(navigator.userAgent.indexOf('Gecko/')!=-1){loc=',location=1';}else{loc='';}
if(iev>0){w_wt=800;}else{w_wt=50;}
pwn=document.forms.pinv; pwn.u.value=x;pwn.r.value=r;pwn.z.value=z;
ss=window.open('','pchat'+x,'width=550,height=400,resizable=1'+loc);
ss.focus(); pwn.target='pchat'+x; setTimeout('if(ss){pwn.submit()}',w_wt);}return false}


function sbr(x,y){
for(i=0;i<10;i++){
a=document.getElementById('s'+x+'x'+i);
a.style.borderColor='#fff';
a.style.width='7px';a.style.height='7px';
a.style.borderWidth='1px';}
b=document.getElementById('s'+x+'x'+y);
b.style.borderColor='#000';
b.style.width='5px';b.style.height='5px';
b.style.borderWidth='2px';
}

function set_geo(position){
lat=position.coords.latitude;lon=position.coords.longitude;
load_panel(3);document.getElementById('panel_title').innerHTML=geo_title;
load_ajc('panel_mid','geoloc.php?lat='+lat+'&lon='+lon,'q=0','','');document.getElementById('panel_mid').style.overflow='hidden';}
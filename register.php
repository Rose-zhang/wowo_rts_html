<?php
/**
 * Created by PhpStorm.
 * User: think
 * Date: 2015/6/15
 * Time: 22:48
 */
require ('connect.php');
if(isset($_POST['register-submit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "select * from user_info where uname = '$username' ";
    $query = mysql_query($sql);
    $row_num = mysql_num_rows($query);
    if(!$row_num){
        //no match info, ok to register

        $sql = "insert into user_info (uname,passwd) values('$username','$password') ";
        $query = mysql_query($sql);
        $sql = "select u_id from user_info where uname = '$username' ";
        $query = mysql_query($sql);
        $row = mysql_fetch_array($query);
        $u_id = $row[0];
        $sql = "insert into rank (u_id,u_name,play_count,win_count,win_rate) values ($u_id,'$username',0,0,0)";
        $query = mysql_query($sql);

        ?>
        <script>
            alert("注册成功！祝您游戏愉快！");
            location.href = "login.html";
        </script>

        <?php
        //header("Location:login.html");
    }
    else{
        ?>
        <script>
            alert("用户名已经存在！");
            location.href = "login.html";
        </script>
    <?php
    }
}

?>
<!DOCTYPE html>
<?php
//session_start();
require('checkvalid.php');
?>
<html>
	<head>
		<meta http-equiv="Content-type" content="text/html; charset=utf-8">
		<title>Conquer</title>
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />

        <link rel="stylesheet" href="css/styles.css" type="text/css" media="screen" charset="utf-8">
		<script src="js/common.js" type="text/javascript" charset="utf-8"></script>		
		<script src="js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/game.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/mouse.js" type="text/javascript" charset="utf-8"></script>		

		<script src="js/maps.js" type="text/javascript" charset="utf-8"></script>

	    <script src="js/buildings.js" type="text/javascript" charset="utf-8"></script>
	    <script src="js/vehicles.js" type="text/javascript" charset="utf-8"></script>
	    <script src="js/aircraft.js" type="text/javascript" charset="utf-8"></script>        
	    <script src="js/terrain.js" type="text/javascript" charset="utf-8"></script>
	
		<!-- A* Implementation by Andrea Giammarchi -->
		<script src="js/astar.js" type="text/javascript" charset="utf-8"></script>
		
		<script src="js/sidebar.js" type="text/javascript" charset="utf-8"></script>
		
		<script src="js/bullets.js" type="text/javascript" charset="utf-8"></script>
		
		<script src="js/sounds.js" type="text/javascript" charset="utf-8"></script>
		
		<script src="js/multiplayer.js" type="text/javascript" charset="utf-8"></script>

        <script src="js/jquery-2.1.4.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>

	</head>
	<body>
    <?php  require ('navigation.php'); ?>

    <div id="mainContainer">
        <div id="gamecontainer" class = "box">

            <div id="gamestartscreen" class="gamelayer">
                <span id="multiplayer" onclick = "multiplayer.start();">Start game</span><br>
            </div>
            <div id="gameinterfacescreen" class="gamelayer">

                <div id="callerpicture"></div>
                <div id="cash_hint">当前资源</div>
                <div id="cash"></div>
                <div id="sidebarbuttons">
                    <input type="button" id="starportbutton" title = "Starport(2000)"> &nbsp;
                    <input type="button" id="turretbutton" title = "Turret(1500)">

                    <input type="button" id="scouttankbutton" title = "Scout Tank(500)">&nbsp;
                    <input type="button" id="heavytankbutton" title = "Heavy Tank(1200)">
                    <input type="button" id="harvesterbutton" title = "Harvester(1600)">&nbsp;

                    <input type="button" id="chopperbutton" title = "Copter(900)">
                    <input type="button" id="wraithbutton" title = "Wraith(600)">

                </div>
                <!--Canvas-->
                <canvas id="gamebackgroundcanvas" height="560" width="760"></canvas>
                <canvas id="gameforegroundcanvas" height="560" width="760"></canvas>
                <input type="text" id="chatmessage">

                <input id='username' type = "hidden" value = "<?php echo $_SESSION['username']?>">
                <!--chat-->


            </div>

            <div id="messageboxscreen" class="gamelayer">
                <div id="messagebox">
                    <span id="messageboxtext"></span>
                    <input type="button" id="messageboxok" onclick="game.messageBoxOK();">
                    <input type="button" id="messageboxcancel" onclick="game.messageBoxCancel();">
                </div>
            </div>
            <div id="loadingscreen" class="gamelayer">
                <div id="loadingmessage"></div>
            </div>
            <div id="roomscreen" class="gamelayer">
                <select class="form-control" id="multiplayergameslist" size="10">
                </select>
                <input type="button" id="multiplayerjoin" onclick="multiplayer.join();">
                <input type="button" id="multiplayercancel" onclick="multiplayer.cancel();">
            </div>
        </div>
        <div id="massagewrapper">
            <div id="gamemessages"></div>
            <div id="gameanalysis">
                <table>
                    <tr>
                        <td>收集资源:&nbsp;&nbsp;</td>
                        <td id="money_collected">0</td>
                    </tr>
                    <tr>
                        <td>损失单位数:&nbsp;&nbsp;</td>
                        <td id="destroyed_num">0</td>
                    </tr>
                </table>
            </div>
        </div>


    </div>

        <div style="text-align:center;">
            <p>copyright © Jason-Zhang@ZJU</p>
        </div>
	</body>
</html>
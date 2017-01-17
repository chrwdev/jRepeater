<?php
	
	$a_subtitle = array();
	$a_file = array();
	$a_serialize = array();
	
	foreach( $_GET as $row => $i ):
		
		if( strpos( $row , 'inputSubtitle' ) !== false ):
			
			array_push( $a_subtitle , $i );	
			
		elseif( strpos( $row , 'inputFile' ) !== false ):
			
			array_push( $a_file , $i );
			
		endif;
	
	endforeach;
	
	for( $i = 0; $i < count( $a_subtitle ); $i++ ):
		
		array_push( $a_serialize , array( 'subtitle' => $a_subtitle[ $i ] , 'file' => $a_file[ $i ] ) );
		
	endfor;
	
	var_dump( serialize( $a_serialize ) );
	
?>
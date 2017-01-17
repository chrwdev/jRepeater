jQuery( document ).ready( function() {
	
	//Clone
	var jrepeaterView = jQuery( '#jrepeater-view' );
	jrepeaterView.removeAttr( 'id' );
	jrepeaterView.addClass( 'jrepeaterClone' );
	
	//Item
	var jrepeaterItem = '<div class="jrepeater-view-item">' + jrepeaterView.html() + '</div>';
	
	//Options
	var jconfirm = jQuery( 'form.jrepeater' ).data( 'jconfirm' );
	
	//Clear
	jQuery( '#jrepeater-content .jrepeaterClone' ).remove();
	
	//Index Input
	function jrepeaterUpdateItem(){
		
		var jcount = 0;
		
		jQuery( '#jrepeater-content .jrepeater-view-item' ).each(function( a , b ) {
			
			jQuery( b ).find( 'input' ).each(function( c , d ) {
				
				var inputName = jQuery( d ).data( 'name' ) + '_' + jcount;
				
				jQuery( d ).attr( 'name' , inputName );
						
			});
			
			jcount++;
			
		});
		
	}//jrepeaterUpdateItem
	
	//Add Item
	jQuery( '.jrepeater-btn-add' ).click( function( event ){
		
		event.preventDefault();
		
		jQuery( jrepeaterItem ).appendTo( '#jrepeater-content' );
		jrepeaterUpdateItem();
	});
	
	//Remove Item
	jQuery( '#jrepeater-content' ).on( 'click' , '.jrepeater-btn-remove' , function( event ){
		
		if( jconfirm === true ){
			
			var r = confirm( 'Confermi eliminazione della riga?' );
			
		} else {
			
			var r = true;
				
		}
		
		if( r === true ){
			
			jQuery( this ).closest( '.jrepeater-view-item' ).remove();
			jrepeaterUpdateItem();
		}
		
	});

});
<?php
	
	#Author: Alexander Adu-Sarkodie
	# TODO:
	
	
	$page_title = 'Widget Cost Calculator';
	include('includes/header.html');
	
	echo '<h1>The Transport Company coding test</h1>';
	//check for form submission
	if (isset($_POST['submitted'])){
	
		//form validation
		if(is_numeric($_POST['quantity']) || 
		is_numeric($_POST['price']) ||
		is_numeric($_POST['tax']) || 
		is_numeric($_POST['quantitym'])  || 
		is_numeric($_POST['pricem']) || 
		is_numeric($_POST['tax2']) || 
		is_numeric($_POST['quantitybr'])  || 
		is_numeric($_POST['pricebr']) || 
		is_numeric($_POST['quantityb2'])  || 
		is_numeric($_POST['priceb2']) || 
		is_numeric($_POST['quantitybr2'])  || 
		is_numeric($_POST['pricebr2'])  || 
		is_numeric($_POST['quantitym2'])  || 
		is_numeric($_POST['pricem2']) ) {
			
		//calculate the results
		$total = (($_POST['quantity']) * ($_POST['price'])) + 
		(($_POST['quantitym']) * ($_POST['pricem'])) + 
		(($_POST['quantitybr']) * ($_POST['pricebr'])) + 
		(($_POST['quantityb2']) * ($_POST['priceb2'])) + 
		(($_POST['quantitybr2']) * ($_POST['pricebr2'] / 2)) + 
		(($_POST['quantitym2']) * ($_POST['pricem2'] * 0.75));

		$taxrate = ($_POST['tax'] / 100);  //turns eg 5% to 0.05
		$total -= ($total *  $taxrate); //add the taxrate to total
		$taxrate2 = ($_POST['tax2'] / 100);  //turns eg 5% to 0.05
		
			
			//Now we print the result
			
		echo '<p>The total cost of your purchased  items  is £' . number_format($total,2) . '</p>';		
		} else { //invalid submitted values
			echo '<h1>Error</h1>
			<p class="error"> Please enter a valid quantity, price and tax</p>';
			
		}
	
	}//End of main isset() 

	//Now we leave the PHP section and create the form

	//Offers: 
	//1. Buy 2 Butter and get a Bread at 50% off
	//2. Buy 3 Milk and get the 4th Milk free (25%)
?>

<table cellspacing="2" cellpadding="2" border="1" width="50%">
	<tr>
		<td><strong>Product</strong></td><td><strong>Cost</strong></td>
	</tr>
	<tr><td>Butter</td><td>£0.80</td></tr>
	<tr><td>Milk</td><td>£1.15</td></tr>
	<tr><td>Bread</td><td>£1.00</td></tr>
</table>

<div>
	<form action="ttc-test.php" method="post">
		<h3>Standard</h3>
		<p><strong>Butter</strong><br />
			Quantity: <input type="text" name="quantity" size="5" maxlength="10" value="<?php  if(isset($_POST['quantity'])) echo $_POST['quantity']  ; ?>" /> 
			Price: <input type="text" name="price" size="5" maxlength="10" value="<?php  if(isset($_POST['price'])) echo $_POST['price']  ; ?>" />
		</p>


		<p><strong>Milk</strong><br />
			Quantity: <input type="text" name="quantitym" size="5" maxlength="10" value="<?php  if(isset($_POST['quantitym'])) echo $_POST['quantitym']  ; ?>" /> 
			Price: <input type="text" name="pricem" size="5" maxlength="10" value="<?php  if(isset($_POST['pricem'])) echo $_POST['pricem']  ; ?>" />
		</p>


		<p><strong>Bread</strong><br />
			Quantity: <input type="text" name="quantitybr" size="5" maxlength="10" value="<?php  if(isset($_POST['quantitybr'])) echo $_POST['quantitybr']  ; ?>" /> 
			Price: <input type="text" name="pricebr" size="5" maxlength="10" value="<?php  if(isset($_POST['pricebr'])) echo $_POST['pricebr']  ; ?>" />
		</p>
		<hr />
		<h3>Promotions</h3>
		<p>
			<i>Buy 2 Butter and get  Bread at 50% off.</i><br />
			<strong>Butter</strong><br />
			Quantity: <input type="text" name="quantityb2" size="5" maxlength="10" value="<?php  if(isset($_POST['quantityb2'])) echo $_POST['quantityb2']  ; ?>" /> 
			Price: <input type="text" name="priceb2" size="5" maxlength="10" value="<?php  if(isset($_POST['priceb2'])) echo $_POST['priceb2']  ; ?>" /><br />


			<strong>Bread</strong><br />
			Quantity: <input type="text" name="quantitybr2" size="5" maxlength="10" value="<?php  if(isset($_POST['quantitybr2'])) echo $_POST['quantitybr2']  ; ?>" /> 
			Price: <input type="text" name="pricebr2" size="5" maxlength="10" value="<?php  if(isset($_POST['pricebr2'])) echo $_POST['pricebr2']  ; ?>" /><br />
		</p>

		<p>
			<i>Buy 3 Milk and get  the 4th free.</i><br />
			<strong>Butter</strong><br />
			Quantity: <input type="text" name="quantitym2" size="5" maxlength="10" value="<?php  if(isset($_POST['quantitym2'])) echo $_POST['quantitym2']  ; ?>" /> 
			Price: <input type="text" name="pricem2" size="5" maxlength="10" value="<?php  if(isset($_POST['pricem2'])) echo $_POST['pricem2']  ; ?>" /><br />

		</p>



		<p>Tax(%) - VAT: <input type="text" name="tax" size="5" maxlength="5" value="<?php  if(isset($_POST['tax'])) echo $_POST['tax']  ; ?>" /></p>
		<p><input type="submit" name="submit" value="Calculate" /></p>
		<input type="hidden" name="submitted" value="TRUE" />
	</form>
</div>

<?php
		include('includes/footer.html');
?>

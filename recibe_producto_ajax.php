
    <?php
    $nombre = $_POST['nombre'];
    $costo = $_POST['costo'];
    $precio = $_POST['precio'];
    $stock = $_POST['stock'];
    $Stock_minimo = $_POST['Stock_minimo'];
    $moneda = '$';

    ?>
    <div class = "container"><br>
    <table class ="table table-striped table-hover table-bordered">
        <tbody>
            <tr>
                <th>NOMBRE</th>
                <th>COSTO</th>
                <th>PRECIO</th>
                <th>STOCK</th>
                <th>Stock_minimo.</th>
            </tr>
            <tr>
                <td><?php echo $nombre ?></td>
                <td><?php echo $moneda.''.$costo ?></td>
                <td><?php echo  $moneda.''.$precio ?></td>
                <td><?php echo $stock ?></td>
                <td><?php echo $Stock_minimo ?></td>
            </tr>
        </tbody>


</table>


    


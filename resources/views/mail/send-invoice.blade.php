<h3>Invoice untuk transaksi anda</h3>

<table border="1" cellpadding="5" cellspacing="0" style="width: 100%">
    <tr>
        <th>No. Invoice</th>
        <td>{{ $transaction->invoice }}</td>
    </tr>
    <tr>
        <th>Tanggal</th>
        <td>{{ $transaction->created_at->translatedFormat('l, d F Y - H:i:s') }}</td>
    </tr>
    <tr>
        <th>Produk Dibeli</th>
        <td>{{ getTicketCount($transaction->id) }} Tiket {{ $transaction->event->name }}</td>
    </tr>
    <tr>
        <th>Total</th>
        <td>{{ $transaction->total }}</td>
    </tr>
    <tr>
        <th>Metode Pembayaran</th>
        <td>{{ json_decode($transaction->payment, true)['method'] }}</td>
    </tr>
    <tr>
        <th>Virtual Account</th>
        <td>{{ json_decode($transaction->payment, true)['data'] }}</td>
    </tr>
</table>

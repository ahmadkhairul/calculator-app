<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function home()
    {
        $login = Login::all();
        $login_arr = $login->toArray();

        $items = array();
        foreach ($login_arr as $r) { // get difference in minutes
            $datetime1 = $r['createdAt']->toDateTime()->format("Y/m/d H:i:s");
            $datetime2 =  $r['logoutTime']->toDateTime()->format("Y/m/d H:i:s");
            $r['total']  = (strtotime($datetime2) - strtotime($datetime1)) / 60;
            $items[] = $r;
        }

        $result = array();
        foreach ($items as $k => $v) { // get total minutes for each username
            $id = $v['username'];
            $result[$id][] = $v['total'];
        }

        $new = array();
        foreach ($result as $key => $value) {
            $hours = floor(array_sum($value) / 60);
            $min = floor(array_sum($value) - ($hours * 60));
            $new[] = array(
                'username' => $key,
                'total' => round(array_sum($value) / 60, 2),
                'desc' => $hours . ' Jam ' . $min . ' Menit'
            );
        }

        return view('visitor-chart', ['data' => $new]);
    }
}

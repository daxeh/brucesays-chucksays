{{
json_encode([
    'status' => isset($status) ? $status : 200,
    'msg' => isset($msg) ? $msg : 'OK',
    'payload' => $data
])
}}

